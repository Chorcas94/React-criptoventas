import "./styles.scss"

const TarjetaCat =(props)=>{
    console.log(props);

    return(
        <div className="TarjetaContainer">
        <div className="card text-dark bg-info mb-3">
        <div className="card-header">{props.producto.name}</div>
        <div className="card-body">
        <h5 className="card-title">La cantidad de {props.producto.name} es:</h5>
        <p className="card-text">{props.producto.totalProducts} {props.producto.name}</p>
        </div>
        </div>
        </div>
    )
}

export default  TarjetaCat