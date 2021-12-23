import {takeLatest, call, put} from "redux-saga/effects";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {environment} from "../../environment";
import {PRODUCTS_QUERY} from "../../queries/products";
import {CURRENCY_QUERY} from "../../queries/currency";
export const client = new ApolloClient({
    uri: environment.graphQLEndpoint,
    cache: new InMemoryCache()
});
export function* fetchProducts(action) {
    try{
        yield put({type: 'LOADING_PRODUCTS', payload: true});
        const { currency } = action.payload || { currency: environment.defaultCurrency };
        const response = yield call(async () => {
            return await client.query({query: PRODUCTS_QUERY, variables: {currency}});
        });
        const { data: { products } } =response;
        yield put({type: 'UPDATE_ALL_PRODUCTS', payload: products});
        yield put({type: 'CHANGE_CURRENCY', payload: currency});
        yield put({type: 'LOADING_PRODUCTS', payload: false});
    } catch (e) {
        yield put({type: 'LOADING_PRODUCTS', payload: false});
    }
}
export function* fetchCurrencies() {
    const response = yield call(async () => {
        return await client.query({query: CURRENCY_QUERY});
    });
    const { data: { currency } } =response;
    if (response) {
        yield put({type: 'SAVE_CURRENCIES', payload: currency});
    }
}
export function* changeCurrency({payload}) {
    yield put({type: 'FETCH_PRODUCTS_PROPOSAL', payload: {currency: payload} });
}


export function* fetchCurrenciesProposalListener() {
    yield takeLatest('FETCH_CURRENCIES_PROPOSAL', fetchCurrencies)
}

export function* fetchProductsProposalListener() {
    yield takeLatest('FETCH_PRODUCTS_PROPOSAL', fetchProducts)
}

export function* changeCurrencyProposalListener() {
    yield takeLatest('CHANGE_CURRENCY_PROPOSAL', changeCurrency)
}
