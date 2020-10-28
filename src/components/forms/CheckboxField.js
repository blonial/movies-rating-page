import React from 'react';
import { object, string, shape, bool } from 'prop-types';

function CheckboxField({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
      {label && <label>{label}</label>} <input {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  );
}

CheckboxField.propTypes = {
  input: object.isRequired,
  label: string,
  type: string,
  meta: shape({
    touched: bool.isRequired,
    error: string,
  }).isRequired,
};

CheckboxField.defaultProps = {
  label: null,
  type: 'checkbox',
};

export default CheckboxField;
