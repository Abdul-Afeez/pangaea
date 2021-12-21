import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {ProductList} from "../../pages/ProductList";
export function AppRoot() {
        return <Router>
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
}
