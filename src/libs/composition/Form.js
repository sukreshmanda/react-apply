const Form = ({onSubmit, preventDefault=false, children}) => {
    return(
        <form onSubmit={(event) => {
            onSubmit();
            !preventDefault || event.preventDefault();
        }}>
            {children}
        </form>
    )
}
const Button = ({onClick, type="button", color, children}) => {
    return(
        <button 
            onClick={onClick}
            style={
                color = {color}
            }>
            {children}
        </button>
    )
}
const InputField = ({label, type="text", placeholder, onChange}) => {
    return(
        <label>
            {label} : <input type={type} placeholder={placeholder} onChange={onChange}/>
        </label>
    )
}
export{
    Form,
    Button,
    InputField
};