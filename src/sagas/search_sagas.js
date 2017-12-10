import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { searchActions } from '../constants/action_types';
import { searchComplete, searchFailure, articleSuccess } from '../actions/actions_search';

// const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'http://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search?';
const PARAM_QUERY = 'query=';
const ITEMS_QUERY = '/items/';
const TAGS = '&tags=';


export function* search({ term, searchFor }) {
    console.log(term, searchFor);
    const SEARCH_URL = `${PATH_BASE}${PATH_SEARCH}${PARAM_QUERY}${term}${TAGS}${searchFor}`;
    try {
        const data = yield call(axios.get, SEARCH_URL);
        yield put(searchComplete(data.data.hits));
    } catch (e) {
        yield put(searchFailure(e));
    }
}

export function* getArticle({ id }) {
    const URL = `${PATH_BASE}${ITEMS_QUERY}${id}`;
    try {
        const data = yield call(axios.get, URL);
        yield put(articleSuccess(data.data));
    } catch (e) {
        // Do nothing for now
    }
}

export const searchSagas = [
    takeLatest(searchActions.SEARCH_REQUESTED, search),
    takeLatest(searchActions.FETCH_ARTICLE, getArticle)
];

/*
    Potentially overkill below
*/

// export function* searchRequested() {
//     while (true) {
//         const { term } = yield take(searchActions.SEARCH_REQUESTED);

//         yield put(executeSearch(term))
//     }
// }


// export function* executeSearch() {
//     while (true) {
//         try {
//             const { term } = yield take(searchActions.EXECUTE_SEARCH)
//             const articles = yield call(axios.get())
//             yield put(searchComplete(articles))
//         } catch (e) {
//             yield put(searchFailure(e))
//         }
//     }
// }