import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ashwin', text: 'React Learning' },
  { id: 'q2', author: 'Vijendra', text: 'Redux Learning' },
];

function QuoteDetail() {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.id);

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.id}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
