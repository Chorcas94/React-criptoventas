import "./styles.scss"

const Button = ({name,handleClick}) => {
    return ( <div className="buttonContainer">
        <button className="buttonElement" onClick={handleClick}><div className="buttonTitle">{name}</div></button>
    </div> );
}
 
export default Button;