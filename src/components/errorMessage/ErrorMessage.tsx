import React, { useState } from 'react';
import './ErrorMessage.scss';

interface IProps {
  /**
   * Specifies the error message 
   *
   */
  message: string;
  /**
   * Specifies the error message 
   *
   */
  displayError: boolean;


}

const ErrorMessage:React.FunctionComponent<IProps> = ({ message, displayError }) => {
  const [error, setError] = useState(displayError);
  return (
    <>
      {
        displayError && 
          (<div className={`cs-error ${displayError ? "cs-error__visible" : ""}`}>
            {message}
          </div>)
      }
    </>
  )
};

export default ErrorMessage;
