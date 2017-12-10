import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Article from './article';
import Comment from './comment';

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
    
    render() {
        
        return (
            <Col md={ { size: 8, offset: 2 } } style={ { marginTop: '10px' } }>
                { this.props.article._tags[0] === 'comment' ?
                 <Comment 
                 comment={ this.props.article } 
                 toggleContent={ this.toggleContent } 
                 collapse={ this.state.collapse }
                 status={ this.state.status } 
                 /> : 
                 <Article article={ this.props.article } />}
            </Col>
        );
    }
}

export default ArticleItem;
