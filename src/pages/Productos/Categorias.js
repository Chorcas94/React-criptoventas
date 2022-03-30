import ListarCategoriasTemplate from "templates/Productos/Categorias/CateogoriasProductoTemplate"
import  {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Services from "common/Services"

const axios = require('axios').default;

const Categorias = () =>{
    const [categorias, setCategorias] = useState([])
    const history = useNavigate();

 const handleDetail = (idProduct) => {
     history("/productos/detalle",{
         state:{
             idProduct:idProduct
         }
     }
     )
 }

    useEffect(() => {
        Services.get({
            path:"api/products/",
            handleAccept:(response)=>setCategorias(response.data.countByCategory),
        })
    }, [])

    return(
        <ListarCategoriasTemplate productos={categorias} handleDetail={handleDetail} />
        )
}
export default Categorias
