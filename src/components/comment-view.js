import React, { Component } from 'react';
import moment from 'moment';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions/actions_search';
import { activeArticleSelector, statusFetch } from '../selectors/search_selector';
import Tree from './tree';


class CommentView extends Component {

    componentWillMount() {
        this.props.fetchArticle();
    }

    renderArticle(article) {
        console.log(article);
        const { title, url = 'No link', created_at, points } = article;
        return (
            <div>
                <Card style={ { border: 'none' } }>
                    <CardBody>
                        <CardTitle>
                            { title }
                        </CardTitle>
                        <CardSubtitle>
                            <a href={ url }>
                            { url }
                            </a>
                        </CardSubtitle>
                        <CardText>
                            <small className="text-muted">
                                {moment(created_at).format('Do MMMM')}, Points : {points}
                            </small>
                        </CardText>
                        <hr />
                    </CardBody>
                </Card>
            </div>
        );
    }

    render() {
        return (
            <Container>
                <Row>
                    { this.props.status ? 
                        (
                            <Col md={ { size: 2, offset: 5 } }>
                                <div className="loader" /> 
                            </Col>
                        ) 
                        :
                        (
                        <Col 
                        md={ { size: 12 } } 
                        lg={ { size: 12 } } 
                        style={ { marginTop: '20px' } }
                        >
                            { this.renderArticle(this.props.article) }
                            
                                <Tree data={ this.props.article.children } depth={ 0 } />
                        

                        </Col>
                        )
                        }                    
                </Row>
            </Container>
        );
    }

}

const mapDispatchToProps = (dispatch, props) => ({
    fetchArticle: () => dispatch(fetchArticle(props.match.params.id))
});

const mapStateToProps = (state) => ({
    article: activeArticleSelector(state),
    status: statusFetch(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentView);
      