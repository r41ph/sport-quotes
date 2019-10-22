import React, { useState } from "react";
import "./AddQuote.scss";
import Button from "../button/Button";
import Input from "../input/Input";
import ErrorMessage from '../errorMessage/ErrorMessage';

type Quote = {
  quote: string;
  person: string;
}

interface IProps {
  onHandleQuotes: (value: Quote) => void
}

const AddQuote: React.FunctionComponent<IProps> = props => {
  const {onHandleQuotes} = props;
  const [quote, setQuote] = useState("");
  const [person, setPerson] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuotes = () => {
    if(quote && person) {
      onHandleQuotes({quote, person});
      setQuote("");
      setPerson("");
      setIsError(false)
    } else {
      setIsError(true);
      setErrorMessage("Both fields are mandatory.");
      setTimeout(()=> {
        setIsError(false)
      }, 3000)
    }
  };

  const handleQuoteChange = (value: string) => {
    setQuote(value);
  };

  const handlePersonChange = (value: string) => {
    setPerson(value);
  };

  return (
    <div className="cs-add-quote">
      <h2 className="cs-add-quote__heading">Add a new quote</h2>
      <form className="cs-add-quote__form">
        <Input
          labelText="Quote"
          ariaLabel="Add quote"
          value={quote}
          id="quote"
          onHandleChange={handleQuoteChange}
        />
        <Input
          labelText="Person"
          ariaLabel="Add person"
          value={person}
          id="person"
          onHandleChange={handlePersonChange}
        />
        <Button
          onClick={handleQuotes}
          className="cs-button__quotes"
          ariaLabel="Submit Quote"
        >
          Submit
        </Button>
      </form>
      <ErrorMessage displayError={isError} message={errorMessage} />
    </div>
  );
};

export default AddQuote;
