import { filterActions } from '../constants/action_types';


export const filterByPopularity = () => ({
    type: filterActions.FILTER_BY,
    payload: 'Popularity'
});

export const filterByDate = () => ({
    type: filterActions.FILTER_BY,
    payload: 'Date'
});

export const setTimeSpan = (time) => ({
    type: filterActions.DATE_FOR,
    time
});

export const setSearchFor = (searchOption) => ({
    type: filterActions.SEARCH_FOR,
    searchOption
});

