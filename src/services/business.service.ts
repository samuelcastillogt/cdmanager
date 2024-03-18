import axios from "axios"
import { ICard } from "../interfaces/Icard.interface"
const URL = window.location.hostname == "localhost" ? "http://localhost:4000/" :"https://cdserver-r54a.vercel.app/"

export const getAllBusiness = async()=>{
    const {data} = await axios.get(URL)
    return data
}
export const editBusiness = async(data: ICard | undefined): Promise<any>=>{
    const response = await axios.post(URL + "edit/" + data?.id, {data})
    return response.data
}
export const deleteBusiness = async(id:string | undefined): Promise<any>=>{
    const response = await axios.get(URL + "delete/" + id)
    return response.data
}