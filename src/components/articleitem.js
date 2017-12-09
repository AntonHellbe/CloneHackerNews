import React, { Component } from 'react';
import { Col, Card, CardTitle, CardText, CardBody, Button, Collapse } from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

class ArticleItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            status: 'Show content'
        };
    }

    toggleContent = () => {
        this.setState((prevState) => {
            if (prevState.collapse) {
                return {
                    collapse: !this.state.collapse,
                    status: 'Show Content'
                };
            }
            return {
                collapse: !this.state.collapse,
                status: 'Hide content'
            };

            
        });
    }

    renderArticle() {
        const { title, 
            points, 
            created_at, 
            url = 'No link available', 
            num_comments, 
            objectID } = this.props.article;
        return (
            <Card 
            style={ { 
            borderLeft: 'none', 
            borderRight: 'none',
            borderTop: 'none',
            borderRadius: '0rem' } }
            >
                <CardBody>
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <CardText>
                        <a href={ url }>
                        {url}
                        </a>
                        <small className="text-muted">
                            <br />
                            {moment(created_at).format('Do MMMM')},
                        Points : {points}, { 
                        <Link 
                        to={ `/article/comments/${objectID}` } 
                        style={ { textDecoration: 'none' } } 
                        className="text-muted"
                        > 
                            Comments : { num_comments } 
                        </Link> }
                        </small>
                    </CardText>
                </CardBody>
            </Card>
        );
    }

    renderComment() {
        const { 
            story_title, 
            points, 
            created_at,
            comment_text } = this.props.article;
        return (
                <Card>
                    <CardBody>
                        <CardTitle className="clearfix">
                            { story_title }
                        <Button 
                        color="primary float-right"
                        size="sm" 
                        onClick={ this.toggleContent }
                        > 
                            { this.state.status } 
                        </Button>
                        </CardTitle>
                        
                        <CardText>
                            <Collapse isOpen={ this.state.collapse }>
                                <p dangerouslySetInnerHTML={ { __html: comment_text } } />
                                <small className="text-muted">
                                    <br />
                                    { moment(created_at).format('Do MMMM') },
                                    Points : {points}}
                                </small>
                            </Collapse>
                        </CardText>
                    </CardBody>
                </Card>
        );
    }
    
    render() {
        
        return (
            <Col md={ { size: 8, offset: 2 } } style={ { marginTop: '10px' } }>
                { this.props.article._tags[0] === 'comment' ?
                 this.renderComment() : 
                 this.renderArticle() }
            </Col>
        );
    }
}

export default ArticleItem;
