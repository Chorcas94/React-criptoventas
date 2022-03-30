const Tabla =({columnas=[], filas=[]})=>{
    return(
        <div className="Tabla">
            <table className="table">
            <thead>
                <tr>
                    {columnas.map((c,i)=> <th key={i} scope="col">{c}</th>)}
                </tr>
            </thead>
            <tbody>
                {filas.map((f,i) => {
                    return <tr>
                            {f.map((value,i)=> <td>{value}</td>) } 
                    </tr>
                } )}
            </tbody>
            </table>
        </div>
    );
}

export default Tabla;