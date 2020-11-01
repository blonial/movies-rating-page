import React from 'react';
import { object, string, shape, bool } from 'prop-types';

function InputField({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error },
}) {
  return (
    <div>
      {label && <label>{label}</label>}
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched && error && <div className='text-danger'>{error}</div>}
      </div>
    </div>
  );
}

InputField.propTypes = {
  input: object.isRequired,
  label: string,
  type: string,
  placeholder: string,
  meta: shape({
    touched: bool.isRequired,
    error: string,
  }).isRequired,
};

InputField.defaultProps = {
  label: null,
  placeholder: null,
  type: 'text',
};

export default InputField;
