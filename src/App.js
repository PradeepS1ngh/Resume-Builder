import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
import { Route, Switch } from 'react-router-dom';


import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';



// import GettingStarted from './components/presentation/gettingStarted'
import GettingStarted from './containers/document'

// import Contacts from './components/presentation/contact';
import Contacts from './containers/contact';

// import Education from './components/presentation/education';
import Education from './containers/education';

// import Finalize from './components/presentation/finalizePage';
import Finalize from './containers/finalizePage';

import register from './components/presentation/register'


import signin from './components/presentation/signin'


function App() {
  return (
    <div>
     <Header></Header>
     <Switch>
          <Route path="/education" component={Education}></Route>
          <Route path="/contact" component={Contacts}></Route>
          <Route path="/getting-started" component={GettingStarted}></Route>
          <Route path="/finalize" component={Finalize}></Route>
          <Route path="/register" component={register}></Route>
          <Route path="/login" component={signin}></Route>
          <Route path="/" component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>   
    </div>
   
  );
}

export default App;
