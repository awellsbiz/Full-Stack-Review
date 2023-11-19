import Button from "./Button"
function FormField(props){
    return (
    <form onSubmit={props.handleAction}>
        <label htmlFor={props.inputName}>{props.inputName} </label>
        <input name={props.inputName} value={props.value} onChange={props.onChange}/>
        <Button type={props.btnType} text={props.btnText} />
    </form>
    )
}

export default FormField