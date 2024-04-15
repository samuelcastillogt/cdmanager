import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { uploadFile } from '../services/file.service';
import { categoria as categori} from '../services/categorias';
import { createBusiness } from '../services/business.service';

export default function AddBusiness() {
    const [image, setImage] = React.useState<string | undefined>()
    const [nombre, setNombre] = React.useState<string | undefined>() 
    const [descripcion, setDescripcion] = React.useState<string | undefined>()
    const [email, setEmail] = React.useState<string | undefined>()
    const [categorie, setCategoria] = React.useState<string | undefined>()
    const [direccion, setDireccion] = React.useState<string | undefined>()
    const [categoria, setCategori] = React.useState([])
    const getCategoria = async()=>{
        const data = await categori()
        setCategori(data)
    }
    React.useEffect(()=>{
        getCategoria()
    },[])
    const uploadFileLocal = async(e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files[0].size > 2000000){
            alert("El archivo supera el limite de tamaño de 2 megas, porfavor proceselo para poder subirlo")
        }else{
        const url = await uploadFile(e.target.files[0])  
        setImage(url)            
        }

    }
    const create = async()=>{
        const data = {
            imagen: image, nombre, descripcion, email, categoria: categorie, direccion
        }
        console.log(data)
        const response = await createBusiness(data)
        if(response == true){
            alert("Creado exitosamente")
            window.location.reload()
        }else{
            alert("Ocurrio un error, ya lo registramos... Intente mas tarde")
        }
    }
    const resetForm = ()=>{
        window.location.reload()
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
      className='form'
      style={{display: "flex", flexDirection: "column", backgroundColor: "#436850"}}
    >
      <div>
        <TextField
          id="filled-textarea"
          label="Nombre de negocio"
          variant="filled"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setNombre(e.target.value)}
        />
        <TextField
          id="filled-multiline-static"
          label="Descripcion"
          multiline
          rows={4}
          variant="filled"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setDescripcion(e.target.value)}
        />
                <TextField
          id="filled-textarea"
          label="Correo Electronico"
          variant="filled"
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
        />
              <InputLabel id="demo-simple-select-label" style={{color: "white"}}>Categorias</InputLabel>
              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categorie}
          onChange={(event)=>setCategoria(event.target.value as string)}
          style={{backgroundColor: "white", color: "black"}}
          placeholder='Categoria'
          label="Categoria"
        >
          {
            categoria.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)
          }
        </Select> 
        <TextField
          id="filled-textarea"
          label="Direccion"
          variant="filled"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setDireccion(e.target.value)}
        />
    {
        image == undefined && <input type="file" name="" id="" accept="image/*" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> uploadFileLocal(e)}/> ||
        <img src={image} style={{width: "300px"}}/>
    }
    
      </div>
      <div className='botonera'>
      <Button size="small" variant="contained" color="error" onClick={resetForm}>Cancelar</Button>
          <Button size="small" variant="contained" onClick={create} color="success" disabled={nombre == undefined || descripcion == undefined || image == undefined || categorie == undefined || email == undefined || direccion == undefined}>Registrar</Button>        
      </div>
    </Box>
  );
}