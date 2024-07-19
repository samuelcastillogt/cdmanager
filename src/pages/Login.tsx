import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login, getToken, checkToken } from '../services/auth.service';

export default function Login(props) {
    const [nombre, setNombre] = React.useState<string | undefined>() 
    const [email, setEmail] = React.useState<string | undefined>()
    const  checkTokenFromLocal= async()=>{
        const tokenLocal = await getToken()
        if(tokenLocal != null){
               props.setToken(tokenLocal)
            props.setValue(0)             
        }else{

        }
      }
    React.useEffect(()=>{
        checkTokenFromLocal()
    },[])

    const loginRest = async()=>{
        const data = {
             nombre, pass:email
        }
        const response = await login(data)
        if(response != "Error"){
            window.localStorage.setItem("token_CD_manager", response)
            checkTokenFromLocal()
        }else{
            alert("Contraseña Equivocada")
        }

    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
      className='form'
      style={{display: "flex", flexDirection: "column"}}
    >
      <div>
        <img src="./icon2.png" alt="" style={{width: "200px"}}/>
        <div>
        <TextField
          id="filled-textarea"
          label="Nombre de Usuario"
          variant="filled"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setNombre(e.target.value)}
          style={{background: "white"}}
        />
        <TextField
          id="filled-textarea"
          label="Contraseña"
          variant="filled"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
          style={{background: "white"}}
        />
       
    
      </div>
      <div className='botonera'>
          <Button size="small" variant="contained" onClick={loginRest} color="success" disabled={nombre == undefined ||  email == undefined }>Iniciar Sesion</Button>        
      </div>          
        </div>

    </Box>
  );
}