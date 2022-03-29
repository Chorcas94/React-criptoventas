import {NavLink} from 'react-router-dom'

const Sidebar =()=>{
    return(
        <div className="Sidebar bg-light">
           <ul>
               <li>
                   <NavLink to="/" className="rounded py2 w-100 d-inline-block px-3" ><i className="bi bi-house-door-fill"></i> Inicio</NavLink>
               </li>
               <li>
                   <NavLink to="/usuarios"  className="rounded py2 w-100 d-inline-block px-3" ><i className="bi bi-people-fill"></i> Usuarios</NavLink>
               </li>
               <li>
                   <NavLink to="/productos" className="rounded py2 w-100 d-inline-block px-3" ><i className="bi bi-box"></i> Productos</NavLink>
               </li>
           </ul>
        </div>
    )
}

export default  Sidebar