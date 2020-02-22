import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import AddEmp from './components/AddEmp';
import * as serviceWorker from './serviceWorker';
import {Route  , BrowserRouter} from 'react-router-dom'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Counter from './Counter';

ReactDOM.render(
    <BrowserRouter>
        <Route exact  path ="/" component={App} />
        <Route exact  path ="/header" component={Header} />
        <Route exact  path ="/content" component={Content} />
        <Route exact  path ="/footer" component={Footer} />
        <Route exact  path ="/counter" component={Counter} />
        <Route exact  path ="/AddEmployee" component={AddEmp} />
    </BrowserRouter>,document.getElementById('root')

);


serviceWorker.unregister();
