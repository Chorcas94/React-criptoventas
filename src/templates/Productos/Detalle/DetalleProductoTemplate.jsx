import "./styles.scss"
import Button from "components/Button/Button"
const DetalleProductoTemplate = ({producto=undefined,handleCancel}) => {
    return ( 
        
            (<div>
                    {producto && <div>
                        <p className="display-5 content">{producto.nombre}</p>
                        <div className="content">
                            <dl className="row">
                                <dt className="col-sm-3">Descripcion</dt>
                                <dd className="col-sm-9">{producto.descripcion}</dd>

                                <dt className="col-sm-3">Marca</dt>
                                <dd className="col-sm-9">{producto.marca}</dd>

                                <dt className="col-sm-3 text-truncate">Modelo</dt>
                                <dd className="col-sm-9">{producto.modelo}</dd>
                            
                                <dt className="col-sm-3 text-truncate">Precio</dt>
                                <dd className="col-sm-9">{producto.precio}</dd>
                                
                                <div>
                                <img alt="imagen producto" src={producto.imagenes_producto}  className="image-container "/>
                                </div>
                            
                            </dl>
                        </div>
                    </div>}
                    <div style={{width:200}}>
                        <Button name="Atras" handleClick={handleCancel} />
                    </div>
            </div> )
            );
}
 
export default DetalleProductoTemplate;