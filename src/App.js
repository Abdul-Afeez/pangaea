import React from 'react';
import './App.css';
import store from "./Store/Reducers";
import {Provider} from "react-redux";
import {client} from "./Store/Saga/GlobalSaga";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ProductList} from "./pages/ProductList";
import {ApolloProvider} from "@apollo/client";

function App() {

  return <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path={'/'}>
            <ProductList />
          </Route>
        </Switch>
      </Router>;
    </ApolloProvider>
  </Provider>

}

export default App;
// eslint-disable-next-line no-unused-vars
