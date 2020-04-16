import React from 'react';
import './App.css';
import Homepage from './pages/homepages/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = (props) => {
  return <h1>This is {props.match.params.type} Page</h1>
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/daraz-collection" component={Homepage} />
        <Route exact path="/daraz-collection/shop/:type" component={HatsPage} />
        <Route exact path="/daraz-collection/shop" component={ShopPage} />
        <Route exact path="/daraz-collection/sign-in" component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
