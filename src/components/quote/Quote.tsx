import React from 'react';
import './Quote.scss';

interface Quote {
  quote: string;
  person: string
}

interface IProps {
  /**
   * Quote to display 
   *
   */
  quote: Quote;
}

const Quote:React.FunctionComponent<IProps> = ({quote}) => {
  return (
    <>
      <div className="cs-quote">
        <div className="cs-quote__quote">{quote.quote}</div>
        <div className="cs-quote__person">{quote.person}</div>
      </div>
    </>
  )
};

export default Quote;
