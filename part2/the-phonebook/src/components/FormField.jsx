import Button from "./Button";
import InputField from "./InputField";

function FormField(props) {
  return (
    <form onSubmit={props.handleAction}>
      <label htmlFor={props.inputName}>{props.inputName} </label>
      <InputField
        name={props.inputName}
        value={props.value}
        onChange={props.onChange}
      />
      <Button type={props.btnType} text={props.btnText} />
    </form>
  );
}

export default FormField;
