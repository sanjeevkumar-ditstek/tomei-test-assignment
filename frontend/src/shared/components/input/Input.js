import React,{forwardRef} from 'react';
import './input.scss'

 const Input = ({
    text,
    type,
    name,
    checked,
    value,
    error,
    placeholder,
    width,
    ...rest
  },inputRef) => {
    return (
      <div className = { error ? "has-error":"formGroup"}>
        {text && <label>{text}</label>}
        <input
          type={type || null}
          name={name || null}
        //   value={value || null}
          checked={checked || null}
          placeholder={placeholder}
          {...rest}
          ref={inputRef}
        />
        {error && <small>{error}</small>}
      </div>
    );
  };


  export default forwardRef(Input)
  