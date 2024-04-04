import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import VoiceOverOffIcon from '@mui/icons-material/VoiceOverOff';
import PlaceIcon from '@mui/icons-material/Place';
import ShopIcon from '@mui/icons-material/Shop';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ForumIcon from '@mui/icons-material/Forum';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../index.css"
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
  return (
    <>
    <div style={{width: "100vw", backgroundColor: "#363062", height: "300px", display: "flex", flexDirection: "column", justifyContent: "center",  padding: "20px", color: "white"}}>
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
            <TextField id="outlined-basic" label="Nombre" variant="outlined" style={{borderColor: "white"}} required/>
            <TextField id="outlined-basic" label="Email" variant="outlined" required type='email'/>
            <TextField id="outlined-basic" label="Comentario" variant="outlined" multiline rows={8}/>
            <Button variant="contained">Outlined</Button>
            </div>
            </div>
        </div>
    </div>    
    </>

  )
}

export default Registro