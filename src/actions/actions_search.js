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

export const defaultSearch = (term) => {
    return {
        type: searchActions.SEARCH_REQUESTED,
        term,
        searchFor: 'front_page'
    };
};


export const fetchArticle = (id) => ({
    type: searchActions.FETCH_ARTICLE,
    id
});

export const articleSuccess = (article) => ({
    type: searchActions.ARTICLE_SUCCESS,
    article
});


export const fetchTopComments = () => ({
    type: searchActions.FRONT_PAGE,

});

export const fetchFrontPage = () => ({
    type: searchActions.SEARCH_REQUESTED,
    term: '',
    searchFor: 'front_page'
});

