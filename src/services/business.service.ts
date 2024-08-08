import axios from "axios"
import * as Redux from "react-redux"
import { ICard } from "../interfaces/Icard.interface"
import { store } from "../redux/store"
import { OPEN_MODAL } from "../redux/slices/modal.slice"
const URL = window.location.hostname == "localhost" ? "http://localhost:4000/" :"https://cdserver-r54a.vercel.app/"
export const getAllBusiness = async()=>{
    const {data} = await axios.get(URL)
    return data
}
export const editBusiness = async(data: ICard | undefined): Promise<any>=>{
    const token = window.localStorage.getItem("token_CD_manager")
    const headers = {
        'Content-Type': 'application/json',
        'token': token
      }
    try{
     const response = await axios.post(URL + "edit/" + data?.id, {data}, {headers: headers})
    return response.data       
    }catch(err){
        const msg = {
            text: "Error de autenticacion de usuario",
            action: "reload"
        }
        store.dispatch(OPEN_MODAL(msg))
    }

}
export const createBusiness = async(data: any): Promise<any>=>{
    const token = window.localStorage.getItem("token_CD_manager")
    const headers = {
        'Content-Type': 'application/json',
        'token': token
      }
      try{
        const response = await axios.post(URL + "add/", {data}, {headers: headers})
        return response.data      
       }catch(err){
           alert("Error de autenticacion de usuario")
       }

}
export const deleteBusiness = async(id:string | undefined): Promise<any>=>{
    const token = window.localStorage.getItem("token_CD_manager")
    const headers = {
        'Content-Type': 'application/json',
        'token': token
      }
      try{
        const response = await axios.get(URL + "delete/" + id, {headers: headers})
        return response.data    
       }catch(err){
           alert("Error de autenticacion de usuario")
       }
}
export const sendDataToInfo = async(data)=>{
        try{
            const response = await axios.post(URL + "v1/business/dataToInfo", {data})
            return response.data
        }catch(err){
            console.log(err)
        }
}