import { searchActions } from '../constants/action_types';

const INITIAL_STATE = {
    term: '',
    articleList: [],
    activeArticle: undefined,
    fetchArticle: true
};

const articlesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case searchActions.SEARCH_REQUESTED:
            return { ...state, term: action.payload };

        case searchActions.SEARCH_COMPLETE:
            return { ...state, articleList: action.articles };

        case searchActions.FETCH_ARTICLE:
            return { ...state, fetchArticle: true };

        case searchActions.ARTICLE_SUCCESS:
            return { ...state, activeArticle: action.article, fetchArticle: false };

        default:
            return state;

    }
};

export default articlesReducer;