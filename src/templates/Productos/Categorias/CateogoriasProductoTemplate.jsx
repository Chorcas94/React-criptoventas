import TarjetaCat from 'components/TarjetaCat/TarjetaCat'


const ListarCategoriasTemplate = ({productos,handleDetail,handleCancel}) => {
    
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {productos.map((producto,index) =>
                 <div key={index} className="flexElement">
                     <TarjetaCat producto={producto} handleDetail={()=>handleDetail(producto.id)} />
                 </div>)}
        </div>
     );
}
 
export default ListarCategoriasTemplate;