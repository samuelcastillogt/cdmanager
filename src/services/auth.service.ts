import axios from "axios"
const URL = window.location.hostname == "localhost" ? "http://localhost:4000/" :"https://cdserver-r54a.vercel.app/"
export interface Iuser{
    nombre: string
    pass: string
}
export const getToken:any = async():Promise<string>=>{
    const token  = window.localStorage.getItem("token_CD_manager")
    const validateToken = await checkToken(token)
    console.log(validateToken.data)
    return token
}
export const login = async(user:Iuser)=>{
    const response = await axios.post(URL + "login", {user: {name: user.nombre, pass: user.pass}})
    const token = response.data
    return token
}
export const checkToken = async(token: string)=>{
    try{
        const response = await axios.post(URL + "check", {token},{headers: {token}})
        const status = response.data
        return status
    }catch(err){
        console.log(err)
    }

}