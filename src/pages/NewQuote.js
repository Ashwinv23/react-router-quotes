import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

function NewQuote() {
  const addQuoteHandler = (quote) => console.log(quote);

  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
