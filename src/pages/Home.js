import  {useState, useEffect } from 'react';
import Services from "common/Services"
import HomeTemplate from 'templates/Home/HomeTemplate';

const Home = () =>{
    const [lastUser, setLastuser] = useState()
    const [lastProd, setLastprod] = useState()
    useEffect(() => {
        // Llamada al producto
        Services.get({
            path:"api/products/last",
            handleAccept:(response)=>setLastprod(response.data.product),
        })
        // Llamada al usuario
        Services.get({
            path:"api/users/last",
            handleAccept:(response)=>setLastuser(response.data.UltimoUsuario),
        })

    }, [])

    return(
        <div>
            <HomeTemplate producto={lastProd} usuario={lastUser}/>
        </div>
    )
}
export default Home