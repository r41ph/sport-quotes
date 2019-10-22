import React, { useState, useEffect } from 'react';
import './QuotesContainer.scss';
import AddQuote from '../addQuote/AddQuote';
import QuotesList from '../quotesList/QuotesList';
import ErrorMessage from '../errorMessage/ErrorMessage';

type Quote = {
  quote: string;
  person: string
}

const Quotes: React.FunctionComponent = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const defaultQuotes = [
    {
      quote:
        'Tortor lacinia euismod sit amet at mauris. Duis dapibus sed ante ac dapibus. Pellentesque consequat erat non turpis auctor volutpat.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Suspendisse quis est sit amet tortor lacinia euismod sit amet at mauris. Duis dapibus sed ante ac dapibus.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Sit amet tortor lacinia euismod sit amet at mauris. Pellentesque consequat erat non turpis auctor volutpat.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Suspendisse quis est sit amet tortor lacinia euismod sit. Duis dapibus sed ante ac dapibus.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Quis est sit amet tortor lacinia euismod sit amet at mauris. Duis dapibus sed ante ac dapibus. Pellentesque consequat erat.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Lorem Ipsum quis est sit amet tortor lacinia euismod sit amet at mauris. Duis dapibus sed ante ac dapibus.',
      person: 'Vestibulum Phasellus'
    }
  ];

  useEffect(() => {
    const getSavedQuotes = () => {
      const savedQuotes = JSON.parse(localStorage.getItem('csQuotes') as string)
        ? JSON.parse(localStorage.getItem('csQuotes') as string)
        : defaultQuotes;
      setQuotes(savedQuotes);
    };
    getSavedQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuotes = (newQuote: Quote) => {
    if (!quotes.find(q => q.quote === newQuote.quote)) {
      const quotessUpdate = [...quotes, newQuote];
      localStorage.setItem('csQuotes', JSON.stringify(quotessUpdate));
      setQuotes([...quotes, newQuote]);
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

export default Quotes;
