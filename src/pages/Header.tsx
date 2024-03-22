import React from 'react'
import Button from '@mui/material/Button';
function Header() {
    const salir = ()=>{
        window.localStorage.removeItem("token_CD_manager")
        window.location.reload()
      }
  return (
    <div className='header'>
        <Button title="Salir" onClick={salir} variant="contained">Salir</Button>
    </div>
  )
}

export default Header