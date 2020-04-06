import React from 'react';
import './App.css';
import Homepage from './pages/homepages/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component';

const HatsPage = (props) => {
  return <h1>This is {props.match.params.type} Page</h1>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/:type" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
