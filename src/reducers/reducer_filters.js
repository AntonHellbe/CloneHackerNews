import moment from 'moment';
import { filterActions } from '../constants/action_types';

const INITIAL_STATE = {
    filterBy: 'Popularity',
    time: moment(0),
    searchFor: '(story,comment)'
};

const filtersReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        
        case filterActions.FILTER_BY:
            return { ...state, filterBy: action.payload };
        
            
        case filterActions.DATE_FOR:
            return { ...state, time: action.time };


        case filterActions.SEARCH_FOR:
            return { ...state, searchFor: action.searchOption };
            
        default:
            return state;

    }

};

export default filtersReducer;