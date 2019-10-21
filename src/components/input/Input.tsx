import React from 'react';
import './Input.scss';

interface IProps {
  /**
   * Specifies input onChange action
   */
  onHandleChange: (value: string) => void;

  /**
   * Sets custom element classnames
   */
  className?: string;

  /**
   * Sets element id
   */
  id: string;

  /**
   * Sets the label text
   */
  labelText?: string;

  /**
   * Sets the aria-label attribute
   */
  ariaLabel: string;

  /**
   * Sets the placeholder text
   */
  placeholder?: string;

  /**
   * Sets the input value
   */
  value: string;

  /**
   * Sets whether the input is required
   */
  required?: boolean;
}

const Input:React.FunctionComponent<IProps> = props => {
  const {
    placeholder,
    labelText = '',
    ariaLabel = '',
    value,
    className: cssClasses = '',
    id = '',
    onHandleChange = () => {},
    required = false,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onHandleChange(event.target.value);
  };

  return (
    <>
      {labelText ? (
        <label htmlFor={id} className="input-field__label">
          {labelText}
        </label>
      ) : null}
      <input
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
        aria-required={required}
        required={required}
        className={cssClasses}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
