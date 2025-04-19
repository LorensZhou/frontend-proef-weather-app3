import './Input.css';

function Input({ type, id, name, labelText, required, handleChange, value }) {
    return (
        <label htmlFor={id}>
            {labelText}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                required={required}
                onChange={handleChange}
            />
        </label>
    );
}

export default Input;


