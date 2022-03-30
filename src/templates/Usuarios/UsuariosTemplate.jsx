import Tabla from "components/Tabla/Tabla"
const UsuariosTemplates =({usuarios})=>{
    return (
        <div>
            <Tabla columnas={["id", "nombre","apellido","email"]} filas={usuarios}/>
        </div>
    );
}

export default UsuariosTemplates