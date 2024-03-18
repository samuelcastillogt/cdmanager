import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
  color: "black"
};
export default function CardBusiness(props: Iprops | undefined) {
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [nombre, setNombre] = React.useState<string | undefined>()
  const [desc, setDesc] = React.useState<string | undefined>()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const edit = async()=>{
    const info = nombre == undefined && desc == undefined ? props?.data : {
      ...props?.data,
      data:{...props?.data?.data, nombre: nombre == undefined ? props?.data?.data.nombre : nombre, descripcion: desc == undefined ? props?.data?.data.descripcion : desc}

    }
    const response = await editBusiness(info)
    console.log(response)
    if(response == true){
      alert("Se Actualizo se forma correcta")
      handleClose()
    }else{
      alert("Ocurrio un error, intentelo mas tarde")
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
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props?.data?.data.imagen}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props?.data?.data.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props?.data?.data.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="error" onClick={handleOpenDelete}>Eliminar</Button>
        <Button size="small" onClick={handleOpen}>Editar</Button>
      </CardActions>
    </Card> 
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField id="outlined-basic" label="Nombre" variant="outlined" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNombre(e.target.value)} value={nombre == undefined ? props?.data?.data.nombre : nombre} defaultValue={nombre == undefined ? props?.data?.data.nombre : nombre}/>
        <TextField id="outlined-basic" label="Descripcion" variant="outlined" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setDesc(e.target.value)} value={desc == undefined ? props?.data?.data.descripcion : desc} defaultValue={desc == undefined ? props?.data?.data.descripcion : desc}/>
          <Button size="small" variant="contained" color="error" onClick={handleClose}>Cancelar</Button>
          <Button size="small" variant="contained" color="success" onClick={edit}>Editar</Button>
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
          <Button size="small" variant="contained" color="error" onClick={handleCloseDelete}>Cancelar</Button>
          <Button size="small" variant="contained" color="success" onClick={deleteDoc}>Editar</Button>
        </Box>
      </Modal> 
    </>

  );
}