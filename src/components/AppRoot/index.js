import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {ProductList} from "../../pages/ProductList";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {environment} from "../../environment";
import {client} from "../../Store/Saga/GlobalSaga";

export function AppRoot() {
        return <ApolloProvider client={client}>
            <Router>
                <Switch>
                    {/*<Route exact path={'/'}>*/}
                    {/*</Route>*/}
                    {/*<Route exact path={'/dashboard'}>*/}
                    {/*</Route>*/}
                    <Route path={'/'}>
                        <ProductList />
                    </Route>
                </Switch>
            </Router>;
        </ApolloProvider>
}
