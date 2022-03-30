import TarjetaBase from "components/TarjetaBase/TarjetaBase";

const staticfiles = process.env.REACT_APP_STATIC_FILES

const UltimoItem = ({producto, usuario}) => {
    return (
        <div className="d-flex justify-content-evenly">
            {producto && 
                <div>
                    <TarjetaBase titulo={"Ultimo Producto Creado"}>
                        <p className="card-text">Nombre: {producto.nombre}</p>
                        <p className="card-text">Descripcion: {producto.descripcion}</p>
                        <p className="card-text">Modelo: {producto.modelo}</p>
                        <p className="card-text">Precio: {producto.precio}</p>
                        <p className="card-text">Marca: {producto.marca} </p>
                        <div>
                            <img width={300} height={300} src={`${staticfiles}${producto.imagenes_producto[0].nombre_imagen}`} alt="imagen de producto" />
                        </div>
                        <p className="card-text"><small className="text-muted">Criptoventas</small></p>
                    </TarjetaBase>
                </div>
            }
            {usuario && 
                <div>
                <TarjetaBase titulo={"Ultimo usuario Creado"}>
                        <div >
                            <img alt="imagen de usuario" src={`${staticfiles}${usuario.img}`}  width={250} height={150}/>
                        </div>
                        <p className="card-text">Nombre: {usuario.nombre}</p>
                        <p className="card-text">Apellido: {usuario.apellido}</p>
                        <p className="card-text"> Email: {usuario.email}</p>
                        <p className="card-text"><small className="text-muted">Criptoventas</small></p>
                </TarjetaBase>
                </div>
            }
        </div>
    )

}

export default UltimoItem;