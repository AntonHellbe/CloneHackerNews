import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchBar from './searchbar';
import ArticleList from './articlelist';
import FilterBar from './filterbar';


class Main extends Component {

    render() {

        return (
            <Container>
                <SearchBar />
                <FilterBar />
                <ArticleList />
            </Container>
        );
    }

}

export default Main;