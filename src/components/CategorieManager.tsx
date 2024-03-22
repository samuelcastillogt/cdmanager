import React from 'react'
import { categoria as categorie}  from '../services/categorias'
function CategorieManager() {
    const [categoria, setCategoria] = React.useState([])
    const getCategoria = async()=>{
        const data = await categorie()
        setCategoria(data)
    }
    React.useEffect(()=>{
        getCategoria()
    },[])
    return (
    <div>
        <h3>Administrador de categorias</h3>
        {
            categoria.length > 0 && categoria.map(i => <p>{i}</p>)
        }
    </div>
  )
}

export default CategorieManager