import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { filterSelector } from '../selectors/filter_selector';
import { defaultSearch } from '../actions/actions_search';
import ArticleItem from './articleitem';

class ArticleList extends Component {


    componentWillMount() {
        if (this.props.articles.length === 0) {
            this.props.defaultSearch(this.props.term);
        }
    }
    
    render() {
        return (
            <Row>
            { this.props.articles.length > 0 ? (
                        this.props.articles.map((article) => <ArticleItem article={ article } />) 
                    ) : (
                        <Col md={ { size: 8, offset: 2 } }>
                            <div>
                                Searching...
                            </div>
                        </Col>
                    ) } 
            </Row>

        );
    }
}

const mapStateToProps = (state) => ({
    articles: filterSelector(state.articles.articleList, state.filters),
    searchFor: state.filters.searchFor,
    term: state.articles.term,
});

const mapDispatchToProps = (dispatch) => ({
    defaultSearch: (term) => dispatch(defaultSearch(term)),    
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);