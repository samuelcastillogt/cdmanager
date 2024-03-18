import React, { useEffect, useState } from 'react'
import './App.css'
import SimpleBottomNavigation from "./components/Menu.tsx"
import Home from "./pages/Home.tsx"
import { getAllBusiness } from './services/business.service.ts';
import { ICard } from './interfaces/Icard.interface.ts';
import AddBusiness from './pages/AddBusiness.tsx';
function App() {
const [value, setValue] = React.useState<number>(0);
const [data, setData] = React.useState<Array<ICard> | undefined>()
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
        value == 0 && <Home data={data}/>
      }
      {
        value == 1 && <AddBusiness />
      }
      <SimpleBottomNavigation setValue={setValue} value={value}/>
    </>
  )
}

export default App
