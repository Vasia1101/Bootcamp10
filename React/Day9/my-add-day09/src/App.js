import React from 'react';
import { Route, Switch} from 'react-router-dom';

import ArticlesPage from './pages/ArticlesPage';
import About from './pages/AboutPades';
import NotFound from './pages/NotFoundPage'
import Home from './pages/HomePage';
import Nav from './Nav';
import ItemPage from './pages/ItemPage';



const App = () => (
  <> 
    <h2>Start</h2>
    
    <Nav/>
      <Switch>
      
      <Route exact path = '/' component = {Home} />
      <Route path = '/about' component = {About} />
      <Route path = '/articles/:id' component = {ItemPage} />
      <Route path = '/articles' component = {ArticlesPage} />
      <Route component = {NotFound} />
      
      </Switch>
      
  </>
)
export default App;
