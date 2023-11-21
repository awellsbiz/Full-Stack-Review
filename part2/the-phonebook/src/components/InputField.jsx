function InputField({name, value, onChange}){
    return (
    <>
    <label htmlFor={name}>{name}</label>
    <input name={name} value={value} onChange={onChange} />
    </>
    )
}

export default InputField