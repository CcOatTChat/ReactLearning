import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App/index';
import {Route  , Link , BrowserRouter} from 'react-router-dom'
import Header from './Header';

test('renders learn react link', () => {
  const { getByText } = render(    
    <BrowserRouter>
      <Route>
        <App/>
      </Route>
    </BrowserRouter>)
  ;
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



test('link home from header', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Route>
        <Header/>
      </Route>
    </BrowserRouter>
  ) ;
  const linkElement = getByText("Home");
  expect(linkElement).toBeInTheDocument();
});


