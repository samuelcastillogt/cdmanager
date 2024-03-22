import React, { useEffect, useState } from 'react'
import './App.css'
import SimpleBottomNavigation from "./components/Menu.tsx"
import Home from "./pages/Home.tsx"
import Login from "./pages/Login.tsx"
import { getAllBusiness } from './services/business.service.ts';
import { ICard } from './interfaces/Icard.interface.ts';
import AddBusiness from './pages/AddBusiness.tsx';
import Utils from './pages/Utils.tsx';
import Button from '@mui/material/Button';
import Header from './pages/Header.tsx'
function App() {
const [value, setValue] = React.useState<number>(5);
const [data, setData] = React.useState<Array<ICard> | undefined>()
const [token, setToken] = useState(null)
const getData = async()=>{
  const response = await getAllBusiness()
  setData(response)
}

useEffect(()=>{
  getData()
  
}, [])
  return (
    

    <>
    {
      token != null && <Header />
    }
    {
      value == 5 && <Login setToken={setToken} setValue={setValue}/>
    }
      {
        value == 0 && <Home data={data}/>
      }
      {
        value == 1 && <AddBusiness />
      }
            {
        value == 2 && <Utils />
      }
      {
        value != 5 && <SimpleBottomNavigation setValue={setValue} value={value}/>
      }
      
    </>
  )
}

export default App
