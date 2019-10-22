import React from 'react';
import './Button.scss';

interface IProps {
  /**
   * Specifies button click event
   */
  onClick: () => void;

  className?: string;

  /**
   * Specifies the aria-label text
   *
   */
  ariaLabel: string;

}

const Button:React.FunctionComponent<IProps> = props => {
  const {
    children,
    onClick = () => {},
    className: cssClasses = '',
    ariaLabel = ""
  } = props;


  const handleClick = () => {
    onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cssClasses}
      aria-label={ariaLabel}
    >
      {children && (
        <span className="cs-button__text">
          {children}
        </span>
      )}
    </button>
  );
};

export default Button;
