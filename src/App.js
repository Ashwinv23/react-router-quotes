import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from '../src/components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
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
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
