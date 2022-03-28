import {NavLink} from 'react-router-dom'

const Sidebar =()=>{
    return(
        <div className="Sidebar bg-light">
           <ul>
               <li>
                   <NavLink to="/"  className="rounded py2 w-100 d-inline-block px-3"  activeClassName="active"><i class="bi bi-house-door-fill"></i> Inicio</NavLink>
               </li>
               <li>
                   <NavLink to="/Usuarios"  className="rounded py2 w-100 d-inline-block px-3"  activeClassName="active"><i class="bi bi-people-fill"></i> Usuarios</NavLink>
               </li>
               <li>
                   <NavLink to="/Productos" className="rounded py2 w-100 d-inline-block px-3"  activeClassName="active"><i class="bi bi-box"></i> Productos</NavLink>
               </li>
           </ul>
        </div>
    )
}

export default  Sidebar