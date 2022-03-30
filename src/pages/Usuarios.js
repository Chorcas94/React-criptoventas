import  {useState, useEffect } from 'react';
import Services from "common/Services"
import UsuariosTemplate from 'templates/Usuarios/UsuariosTemplate'

const Usuarios = () =>{
  const [usuarios, setUsuarios] = useState();
  const [content,setContent]= useState();
  useEffect(() => {
      Services.get({
          path:"api/users",
          handleAccept:(response)=>setUsuarios(response.data.users),
      })
  }, []);

  useEffect(() => {
    usuarios && setContent(usuarios.map((usuario)=> {
          const {id,nombre,apellido,email} = usuario;
          return [id,nombre,apellido,email]
        }))
  } ,[usuarios]);
  
  return( content ? <UsuariosTemplate usuarios={content}/>: <></> );
}
export default Usuarios