import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from '../containers/home';
import Artworks from '../containers/artworks';
import Show from './Show';
import Story from '../containers/Story'
export const App = (props) => {
  ReactGA.initialize('UA-173203075-2');
    ReactGA.pageview(window.location.pathname +  
                      window.location.search);

  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/artworks" component={Artworks} />
          <Route exact path="/artworks/:id" component={Show}/>
          <Route exact path="/story" component={Story}/>
          





        </Switch>
        <footer className="footer">
          <p>©{(new Date().getFullYear())} The Cancer Collective</p>
        </footer>
      </div>
  </BrowserRouter>


  )
}

export default App
