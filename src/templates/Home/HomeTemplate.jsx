import "./styles.scss"
import UltimoItem from "components/UltimosItems/UltimoItem";
const HomeTemplate = ({producto,usuario}) => {
    return (
        <div>
            <p>A continuacion se muestran el ultimo usuario creado, y el ultimo producto creado</p>                    
            <UltimoItem producto={producto} usuario={usuario}/>
        </div>
    );
}

export default HomeTemplate;