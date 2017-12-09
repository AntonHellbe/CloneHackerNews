import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions/actions_search';
import { activeArticleSelector, statusFetch } from '../selectors/search_selector';
import Tree from './tree';


class CommentView extends Component {

    componentWillMount() {
        this.props.fetchArticle();
    }

    renderArticle(article) {
        // console.log(article);
        const { title, url } = article;
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>
                            { title }
                        </CardTitle>
                        <CardSubtitle>
                            { url }
                        </CardSubtitle>
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
                            
                            <Tree data={ this.props.article.children } />
                        

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
      