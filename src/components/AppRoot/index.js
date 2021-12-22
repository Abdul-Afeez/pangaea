import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {ProductList} from "../../pages/ProductList";
import {ApolloProvider} from "@apollo/client";
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
