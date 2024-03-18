import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function AddBusiness() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='form'
    >
      <div>
        <TextField
          id="filled-textarea"
          label="Nombre de negocio"
          placeholder="Placeholder"
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Descripcion"
          multiline
          rows={4}
          variant="filled"
        />
      </div>
      <div className='botonera'>
      <Button size="small" variant="contained" color="error" >Cancelar</Button>
          <Button size="small" variant="contained" color="success" >Editar</Button>        
      </div>
    </Box>
  );
}