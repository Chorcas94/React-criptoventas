import ListarProductosTemplate from "templates/Productos/Listar/ListarProductosTemplate"
import  {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Services from "common/Services"

const axios = require('axios').default;

const Productos = () =>{
    const [productos, setProductos] = useState([])
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
            handleAccept:(response)=>setProductos(response.data.products),
        })
    }, [])

    return(
        <ListarProductosTemplate productos={productos} handleDetail={handleDetail} />
        )
}
export default Productos

