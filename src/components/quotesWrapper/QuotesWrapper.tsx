import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './QuotesWrapper.scss';
import AddQuote from '../addQuote/AddQuote';
import QuotesList from '../quotesList/QuotesList';
import ErrorMessage from '../errorMessage/ErrorMessage';

type Quote = {
  quote: string;
  person: string
}

const Quotes: React.FunctionComponent = (props:any) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { quotes } = props.quotes;

  useEffect(() => {
    const getSavedQuotes = () => {
        if (JSON.parse(localStorage.getItem('csQuotes') as string)) {
            const savedQuotes = JSON.parse(localStorage.getItem('csQuotes') as string)
            props.setQuotes(savedQuotes);
        } else {
          localStorage.setItem('csQuotes', JSON.stringify(quotes));
        }
    };
    getSavedQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuotes = (newQuote: Quote) => {
    if (!quotes.find((q: { quote: string; }) => q.quote === newQuote.quote)) {
      const quotesUpdate = [...quotes, newQuote];
      localStorage.setItem('csQuotes', JSON.stringify(quotesUpdate));
      props.setQuotes(quotesUpdate);
    } else {
      setErrorMessage('The Quote already exist.');
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <>
      <ErrorMessage displayError={error} message={errorMessage} />
      <div className="cs-quotes">
        <QuotesList quotes={quotes} />
        <AddQuote onHandleQuotes={handleQuotes} />
      </div>
    </>
  );
};

export default connect()(Quotes);
