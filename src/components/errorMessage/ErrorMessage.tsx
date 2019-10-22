import React from 'react';
import './ErrorMessage.scss';

interface IProps {
  /**
   * Specifies the error message 
   *
   */
  message: string | undefined;
  /**
   * Specifies the error message 
   *
   */
  displayError: boolean | undefined;
}

const ErrorMessage:React.FunctionComponent<IProps> = ({ message, displayError }) =>  (
  <>
    {
      displayError && 
        (<div className="cs-error">
          {message}
        </div>)
    }
  </>
)

export default ErrorMessage;
