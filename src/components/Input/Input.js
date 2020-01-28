import React from "react";
const Input = props => {
  return (
    <div className='form-group'>
      <label htmlFor={props.name} className='control-label col-sm-2'>
        {props.title}
      </label>
      <div className='col-sm-10'>
        <input
          className='form-control'
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          required
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
