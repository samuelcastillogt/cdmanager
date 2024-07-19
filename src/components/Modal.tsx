import React from "react"
import { useSelector } from "react-redux"
import { IStore } from "../redux/store"
import Button from '@mui/material/Button';
import { actionToStore } from "../uttils/actions";
const Modal = ()=>{
    const {text, action, value} = useSelector((state:IStore) => state.modal)
    const actionToCall = actionToStore[action]
    return(
        value == true && 
        <div className="modalContainer">
        <div className="modal">
            <h2>{text}</h2>
            <div className="botonera">
                <Button onClick={actionToCall}>Aceptar</Button>
            </div>
        </div>            
        </div>

    )
}
export default Modal