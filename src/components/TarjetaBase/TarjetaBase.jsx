const TarjetaBase = ({titulo, children}) => {
    return (
            <div className="TarjetaUltimos">
                <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        {children}
                    </div>
                </div>
            </div>
            )               
}

export default TarjetaBase;