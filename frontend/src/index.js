import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppSwitch from './App-switch';
import { BrowserRouter} from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <BrowserRouter>
  <Auth0ProviderWithHistory>
      <Provider store={store}>
          <AppSwitch />
      </Provider>
    </Auth0ProviderWithHistory>
    </BrowserRouter>
    ,

  document.getElementById('root')
);