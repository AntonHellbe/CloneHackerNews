import { combineReducers } from 'redux';
import FiltersReducer from './reducer_filters';
import ArticlesReducer from './reducer_articles';

const rootReducer = combineReducers({
    filters: FiltersReducer,
    articles: ArticlesReducer
});

export default rootReducer;