import { searchActions } from '../constants/action_types';


export const searchRequested = (term, searchFor) => ({
    type: searchActions.SEARCH_REQUESTED,
    searchFor,
    term
});

export const setTerm = (term) => ({
    type: searchActions.SET_TERM,
    term
});

export const executeSearch = (term) => ({
    type: searchActions.EXECUTE_SEARCH,
    term

});

export const searchComplete = (articles) => ({
    type: searchActions.SEARCH_COMPLETE,
    articles

});

export const defaultSearch = () => ({
    type: searchActions.SEARCH_REQUESTED,
    term: 'redux',
    searchFor: '(story,comment)'
});


export const fetchArticle = (id) => ({
    type: searchActions.FETCH_ARTICLE,
    id
});

export const articleSuccess = (article) => ({
    type: searchActions.ARTICLE_SUCCESS,
    article
});