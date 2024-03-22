import React from 'react'
import Box from '@mui/material/Box'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { ICard } from '../interfaces/Icard.interface';
import Card from "../components/Card"
import { categoria as categorie } from '../services/categorias';
interface Iprops{
  data?: Array<ICard> 
}

function Home(props: Iprops) {
  const [age, setAge] = React.useState<string>('Todos');
  const [filtrada, setFiltrada] = React.useState<Array<ICard>>()
  const [categoria, setCategoria] = React.useState([])
  const getCategoria = async()=>{
      const data = await categorie()
      setCategoria(data)
  }
  React.useEffect(()=>{
      getCategoria()
  },[])
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
    if(event.target.value == "Todos"){
      setFiltrada(props.data)
    }else{
      const dataFiltered = props?.data?.filter(item => item.data.categoria == event.target.value)
      setFiltrada(dataFiltered)
    }
  };

  return (
    <div className='home'>
      <div className='sideBar'>
      <InputLabel id="demo-simple-select-label" style={{color: "white"}}>Categorias</InputLabel>
              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          defaultValue='Todos'
          onChange={handleChange}
          style={{backgroundColor: "white"}}
        >
          <MenuItem value={"Todos"}>Todos</MenuItem>
          {
            categoria.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)
          }
        </Select>        
      </div>

       <Box
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
  >
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", width: "100%"}}>
    {
      filtrada != undefined && filtrada.length > 0 && filtrada.map((item: ICard)=> <Card data={item} key={item.id}/>) 
    }
        {
      filtrada == undefined && props?.data != undefined && props?.data?.length > 0 && props?.data?.map((item: ICard)=> <Card data={item} key={item.id}/>) 
    }
    </div>
  </Box>
    </div>
   
  )
}

export default Home