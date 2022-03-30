import "./styles.scss"




const TarjetaUltimoP = (props) =>{
    console.log(props)
    return(
        
        <div className="TarjetaUltimos">
        <div className="card mb-3">
        <div className="row g-0">
        <div className="col-md-4">
        <img src="..." className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">Ultimo Producto creado</h5>
        <p className="card-text">Nombre:{props.nombre} Marca:</p>
        <p className="card-text">Descripcion:</p>
        <p className="card-text">Precio: Modelo:</p>
        <p className="card-text"><small className="text-muted">Criptoventas</small></p>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default TarjetaUltimoP


