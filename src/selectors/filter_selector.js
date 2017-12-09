

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