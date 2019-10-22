import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './QuotesWrapper.scss';
import AddQuote from '../addQuote/AddQuote';
import QuotesList from '../quotesList/QuotesList';

type Quote = {
  quote: string;
  person: string
}

const Quotes: React.FunctionComponent = (props:any) => {
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
      props.setErrors({form: true, message: "Quote already exists."});
      setTimeout(()=> {
        props.setErrors({form: false, message: ""})
      }, 3000)
    }
  };

  const handleErrors = (errors: any) => {
    props.setErrors(errors);
  }

  return (
    <div className="cs-quotes">
      <QuotesList quotes={quotes} />
      <AddQuote
        onHandleQuotes={handleQuotes}
        onHandleErrors={handleErrors}
        errors={props.errors}
      />
    </div>
  );
};

export default connect()(Quotes);
