import Tarjeta from 'components/Tarjeta/Tarjeta'
import "./styles.scss"

const ListarProductosTemplate = ({productos,handleDetail,handleCancel}) => {
    
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {productos.map((producto,index) =>
                 <div key={index} className="flexElement">
                     <Tarjeta producto={producto} handleDetail={()=>handleDetail(producto.id)} />
                 </div>)}
        </div>
     );
}
 
export default ListarProductosTemplate;
