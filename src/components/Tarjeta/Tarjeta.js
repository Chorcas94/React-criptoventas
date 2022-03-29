import "./styles.scss"
import Button from "components/Button/Button"
const Tarjeta =({producto,handleDetail})=>{
    return(
<div className="card" style={{width: "25rem"}}>
            <div className="card-body">
                <div className="card-title">
                    <div className="card-titulo">
                        <p className="h5">{producto?.nombre}</p>
                    </div>
                </div>
                <p className="card-text card-description">{producto?.descripcion}</p>
            </div>

            <div className="card-body">
            <Button name="Detalle" handleClick={handleDetail}/>
            </div>
        </div>
    )
}

export default  Tarjeta