import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

function QuoteDetail() {
  const params = useParams();
  return (
    <div>
      <h1>Quote Detail</h1>
      <Route path={`/quotes/${params.id}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
