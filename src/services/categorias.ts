import axios from "axios"
const URL = window.location.hostname == "localhost" ? "http://localhost:4000/" :"https://cdserver-r54a.vercel.app/"

export const categoria= async()=>{
    const response = await axios.get(URL+ "categories")
    return response.data
}