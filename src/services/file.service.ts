import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBTlIW_1NAeMeSDOdCc4AICtGxoYbaUyuw",
  authDomain: "directorio-bc73c.firebaseapp.com",
  databaseURL: "https://directorio-bc73c.firebaseio.com",
  projectId: "directorio-bc73c",
  storageBucket: "directorio-bc73c.appspot.com",
  messagingSenderId: "584037980083",
  appId: "1:584037980083:web:3d1a9f630024b3c3565dc6",
  measurementId: "G-PL8N063SXF"
};

const app = initializeApp(firebaseConfig)
const storage = getStorage()


export const uploadFile = async(file: any):Promise<any>=>{
    const name = "aplicacion/" + file.name
    const storageRef = ref(storage, name)
    const snapshot = await uploadBytes(storageRef, file)
    return getDownloadURL(snapshot.ref)
}