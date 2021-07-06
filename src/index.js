import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivacyPolicy from './components/PrivacyPolicy'
import { BrowserRouter as Router,HashRouter,Switch,Route } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>,
    // <HashRouter basename="/EffyBuy">
    //   <Switch>
    //     <Route path='/privacyPolicy' />
    //     <PrivacyPolicy/>
    //     {/* <Route exact path={'/contact'} component={Contact} />
    //     <Route component={Home} /> */}
    //   </Switch>
    // </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
