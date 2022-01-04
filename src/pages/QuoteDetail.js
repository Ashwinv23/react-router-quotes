import React from 'react';
import { useParams } from 'react-router-dom';

function QuoteDetail() {
  const params = useParams();
  return (
    <div>
      <h1>Quote Detail</h1>
      <p>{params.id}</p>
    </div>
  );
}

export default QuoteDetail;
