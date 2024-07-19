import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ICard } from '../interfaces/Icard.interface';
import { deleteBusiness, editBusiness } from '../services/business.service';
interface Iprops {
  data: ICard | undefined
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-around"
};
export default function CardBusiness(props: Iprops | undefined) {
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [nombre, setNombre] = React.useState<string | undefined>()
  const [desc, setDesc] = React.useState<string | undefined>()
  const [direccion, setDireccion] = React.useState<string | undefined>()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const edit = async()=>{
    const info = nombre == undefined && desc == undefined ? props?.data : {
      ...props?.data,
      data:{...props?.data?.data, nombre: nombre == undefined ? props?.data?.data.nombre : nombre, descripcion: desc == undefined ? props?.data?.data.descripcion : desc, direccion: direccion == undefined ? props?.data?.data.direccion : direccion}

    }
    const response = await editBusiness(info)
    if(response == true){
      alert("Se Actualizo se forma correcta")
      handleClose()
    }else{
      console.log("Ocurrio un error, intentelo mas tarde")
    }
  }
  const deleteDoc = async()=>{
      const response = await deleteBusiness(props?.data?.id)
      if(response == true){
        alert("Se elimino de manera correcta, en unos minutos se actualizara la informacion.")
        handleCloseDelete()
      }else{
        alert("Ocurrio un error, intentelo mas tarde")
      }
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }} style={{margin: "20px", backgroundColor: "#FBFADA", color: "#436850"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={props?.data?.data.imagen}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props?.data?.data.nombre}
        </Typography>
        <Typography variant="body2" color="#436850">
            {props?.data?.data.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="error" onClick={handleOpenDelete} startIcon={<DeleteIcon />}>Eliminar</Button>
        <Button size="small" onClick={handleOpen} startIcon={<EditIcon />}>Editar</Button>
      </CardActions>
    </Card> 
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{display: "flex", flexWrap: "nowrap", flexDirection: "column"}}
      >
        <Box sx={style}>
        <TextField id="outlined-basic" label="Nombre" variant="outlined" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNombre(e.target.value)} value={nombre == undefined ? props?.data?.data.nombre : nombre} defaultValue={nombre == undefined ? props?.data?.data.nombre : nombre}/>
        <TextField id="outlined-basic" label="Direccion" variant="outlined" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setDireccion(e.target.value)} value={direccion == undefined ? props?.data?.data.direccion : direccion} defaultValue={direccion == undefined ? props?.data?.data.direccion : direccion}/>
        <TextField id="outlined-basic" label="Descripcion" variant="outlined" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setDesc(e.target.value)} value={desc == undefined ? props?.data?.data.descripcion : desc} defaultValue={desc == undefined ? props?.data?.data.descripcion : desc} multiline/>
        <div className="botonera">
            <Button size="small" variant="contained" color="error" onClick={handleClose}>Cancelar</Button>
          <Button size="small" variant="contained" color="success" onClick={edit}>Editar</Button> 
        </div>
       
        </Box>
      </Modal> 
      <Modal
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
      Advertencia!!!!
    </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Se eliminara el registro de {props?.data?.data.nombre} permanentemente, considere editar. Si desea BORRAR continue.
    </Typography>
    <div className="botonera">
       <Button size="small" variant="contained" color="error" onClick={handleCloseDelete}>Cancelar</Button>
          <Button size="small" variant="contained" color="success" onClick={deleteDoc}>Eliminar Permanentemente</Button>
    </div>
         
        </Box>
      </Modal> 
    </>

  );
}