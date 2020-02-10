import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';
import {Route  , Link , BrowserRouter} from 'react-router-dom'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

ReactDOM.render(
    <BrowserRouter>
        <Route exact  path ="/" component={App} />
        <Route exact  path ="/header" component={Header} />
        <Route exact  path ="/footer" component={Footer} />
    </BrowserRouter>,document.getElementById('root')

);


serviceWorker.unregister();
