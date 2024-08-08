import React, { useState } from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import VoiceOverOffIcon from '@mui/icons-material/VoiceOverOff';
import PlaceIcon from '@mui/icons-material/Place';
import ShopIcon from '@mui/icons-material/Shop';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ForumIcon from '@mui/icons-material/Forum';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../index.css"
import { sendDataToInfo } from '../services/business.service';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../redux/slices/modal.slice';
const oferta = [
    {
        titulo: "Tu perfil visible a todos los vecinos",
        icono: <BusinessIcon fontSize="large"/>
    },
    {
        titulo: "Comparte solo los datos que desees",
        icono: <VoiceOverOffIcon fontSize="large"/>
    },
    {
        titulo: "Geolocalizacion de tu negocio",
        icono: <PlaceIcon fontSize="large"/>
    }
]
const roadMap = [
    {
        titulo: "Publicacion en Play Store con funciones basicas",
        icono: <ShopIcon fontSize="large"/>,
        status: "Listo"
    },
    {
        titulo: "Creacion de tienda administrable",
        icono: <StorefrontIcon fontSize="large"/>,
        status: "En Desarrollo"
    },
    {
        titulo: "Creacion de catalogo de tiendas",
        icono: <StorefrontIcon fontSize="large"/>,
        status: "Backlog"
    },
    {
        titulo: "Sistema de pedidos desde el App",
        icono: <ForumIcon fontSize="large"/>,
        status: "Backlog"
    }
]
function Registro() {
    const [nombre, setNombre] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const [comentario, setComentario] = useState<string>("")
    const dispatch = useDispatch()
    const sendData = async()=>{
        try{
            var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
            if(validEmail.test(email)){
                setError(false)
                const data = {nombre, email, comentario}
                const result  = await sendDataToInfo(data)
                if(result == true){
                    setNombre("")
                    setEmail("")
                    setComentario("")
                    const dataToModal = {
                        text: "Gracias, pronto recibiras un correo electronico.",
                        action: "reload"
                      }
                      dispatch(OPEN_MODAL(dataToModal))                  
                }
            }else{
                setError(true)
            }

        }catch(err){
            const dataToModal = {
                text: "Tenemos dificultades :( intenta mas tarde.",
                action: "reload"
              }
              dispatch(OPEN_MODAL(dataToModal)) 
        }
    }
  return (
    <div style={{width: "100%"}}>
    <div style={{width: "100%", backgroundColor: "#363062", height: "300px", display: "flex", flexDirection: "column", justifyContent: "center",  padding: "20px", color: "white"}}>
        <p style={{fontWeight: "bold", fontSize: "30px", color: "white"}}>Anunciate aqui y llega a cientos de potenciales clientes</p>
    </div>
    <div className="p-5">
        <h2 style={{padding: "10px"}}>Las personas ya buscan lo que ofreces, deja que te encuentren...</h2>
        <div style={{display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: "center"}}>
            {
oferta.map(item => <div style={{width: "150px", height: "200px", border: "1px solid #363062", padding: "10px", backgroundColor: "#818FB4", borderRadius: "10px", margin: "10px"}}>
                {item.icono}
                <p style={{fontSize: "20px", fontWeight: "bolder"}}>{item.titulo}</p>
            </div>)
            }
            
            <div style={{width: "80%"}}>
                <h2>Tu pones tu producto nosotros el trafico</h2>
                <p>Somos una aplicacion cuyo objetivo es conectar, informar y entretener a las vecinos de Ciudad Quetzal. Diariamente nuestros usuarios utilizan el App para conocer el estado del trafico,
                    reportajes sobre la colonia y encontrar productos o servicios que necesitan.
                </p>
                <p>Una de las cosas mas complicadas cuando intentas tener presencia online para tu negocio es que las personas vean tus publicaciones. Es ahi cuando te podemos ayudar. Nuestros usuarios de manera activa ya buscan productos y servicios.</p>
            </div>
            <div>
                <h2>Nuestro RoadMap</h2>
                <div style={{display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: "center"}}>
                {
roadMap.map(item => <div style={{width: "150px", height: "200px", border: "1px solid #363062", padding: "10px", backgroundColor: item.status == "Listo" && "#818FB4" ||  item.status == "En Desarrollo" && "#435585", borderRadius: "10px", margin: "10px"}}>
                {item.icono}
                <p style={{fontSize: "20px", fontWeight: "bolder"}}>{item.titulo}</p>
                <p style={{color: item.status != "Listo" ? "red" : "white"}}>{item.status != "Listo"  && item.status}</p>
            </div>)
            }
            </div>
            <div style={{width: "90%", backgroundColor: "#F5E8C7", padding: "20px", display: "flex", flexDirection: "column"}}>
            <h2>Mandanos un mensaje para que podamos enviarte informacion, es necesario dejar el correo electronico.</h2>
            <TextField id="outlined-basic"  value={nombre} onChange={(e:any)=> {
                                                                                   
                                                                                        setNombre(e.target.value)
                                                                                    
                                                                                    
                                                                                    }} label="Nombre" variant="outlined" style={{borderColor: "white"}} required/>
            <TextField id="outlined-basic" error={error} value={email} onChange={(e:any)=> {
                                                                    setEmail(e.target.value)
                                                                }} label="Email" variant="outlined" required type='email'/>
            <TextField id="outlined-basic" value={comentario} onChange={(e:any)=> setComentario(e.target.value)} label="Comentario" variant="outlined" multiline rows={8}/>
            <Button variant="contained" onClick={sendData} disabled={nombre.length > 0 && email.length > 0 && comentario.length > 0 ? false : true}>Solicitar informacion</Button>
            </div>
            </div>
        </div>
    </div>    
    </div>

  )
}

export default Registro