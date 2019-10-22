import React from 'react';
import './QuotesList.scss';
import Quote from '../quote/Quote';

interface IProps {
  quotes: Quotes[]
}

type Quotes = {
  quote: string;
  person: string
}

const QuotesList:React.FunctionComponent<IProps> = props => {
  const { quotes = [] } = props;
  return (
    <div className="cs-quotes-list">
      {quotes.length > 0 ? quotes.slice().reverse().map(q => {
        return (
            <Quote key={q.quote} quote={q}/>
        )
      })
      : "No Quotes found."}
    </div>
  );
};

export default QuotesList;
