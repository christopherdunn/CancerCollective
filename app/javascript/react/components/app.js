import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from '../containers/home';
import Artworks from '../containers/artworks';
import Show from './Show';
import Story from '../containers/Story';
import Terms from '../containers/Terms';
import Privacy from '../containers/Privacy';
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
          <Route exact path="/terms" component={Terms}/>
          <Route exact path="/privacy" component={Privacy}/>

          





        </Switch>
        <footer className="footer">
          <p>©{(new Date().getFullYear())} The Cancer Collective </p> <Link to='/privacy'>Privacy Policy</Link>
        </footer>
      </div>
  </BrowserRouter>


  )
}

export default App
