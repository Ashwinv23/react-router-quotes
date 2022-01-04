import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/quotes' />
      </Route>
      <Route exact path='/quotes'>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:id'>
        <QuoteDetail />
      </Route>
      <Route path='/newquote'>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;