import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import Covid19 from './components/Covid19';
import SportySearch from './components/SpotySearch';
import createBroserHistory from 'history/createBrowserHistory';
import CountDown from './components/CountDown';
import './index.css';
import {HashRouter, Switch , Route} from 'react-router-dom';
import Header from './components/Header';

const history = createBroserHistory();

ReactDom.render(
<HashRouter basename="/">
   
    <div>
    <Header/>
    <Route exact path="/" component={App} />
    <Route path="/covid" component={Covid19} />
    <Route path="/spoty" component={SportySearch} />
    

    </div>
    
</HashRouter>
,
 document.getElementById('root'));

