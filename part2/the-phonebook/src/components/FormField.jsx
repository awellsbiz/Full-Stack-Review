import Button from "./Button";
import InputField from "./InputField";

function FormField(props) {
  return (
    <form onSubmit={props.handleAction}>
      <InputField
        name={props.inputName}
        value={props.value}
        onChange={props.onChange}
      />
      {props.extraInput && (
        <InputField
        name={props.inputName2}
        value={props.value2}
        onChange={props.onChange}
        />
        
      )}
      <Button type={props.btnType} text={props.btnText} />
    </form>
  );
}

export default FormField;
