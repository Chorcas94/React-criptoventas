import DetalleProductoTemplate from "templates/Productos/Detalle/DetalleProductoTemplate"
import { useLocation, useNavigate } from "react-router-dom"
import {useState,useEffect} from "react"
import Services from "common/Services";
const axios = require('axios').default;


const ProductosDetalle = () => {
    const [producto, setProducto] = useState()
    const location = useLocation()
    const history = useNavigate()
    const idProduct = location?.state?.idProduct

    const handleBack = () => {
        history(-1)
    }

    useEffect(() => {
        if(!idProduct) history("/productos")
        Services.get({
            path:`api/products/${idProduct}/`,
            handleAccept:(response)=>setProducto(response.data.product)
        })
    }, [])

    return <DetalleProductoTemplate producto={producto} handleCancel={handleBack}/> ;
}
 
export default ProductosDetalle