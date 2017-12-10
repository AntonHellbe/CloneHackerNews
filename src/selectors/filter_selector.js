import moment from 'moment';

export const filterSelector = (articles, { filterBy, time }) => {
    return articles.filter((article) => {
        const { created_at_i } = article;

        return created_at_i > time;
    }).sort((a, b) => {
        if (filterBy === 'Popularity') {
            return a.points > b.points ? -1 : 1;
        } else if (filterBy === 'Date') {
            return a.created_at_i > b.created_at_i ? -1 : 1;
        }

        return 0;
    });

};

export const mapFiltersToValues = ({ filterBy, time, searchFor }) => {
    const values = {};

    values.filterBy = filterBy;
    values.searchFor = searchFor;
    
    if (time === moment(0).valueOf()) {
        values.time = 'All time';
    } else if (time < moment().subtract(8, 'days').valueOf()) {
        values.time = 'Last 24h';
    } else if (time < moment().subtract(4, 'days').valueOf()) {
        values.time = 'Past Week';
    }

    return values;
};