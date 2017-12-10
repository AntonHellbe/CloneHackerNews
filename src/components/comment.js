import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardSubtitle, Collapse, Button } from 'reactstrap';
import moment from 'moment';

const Comment = (props) => {
    const {
            story_title,
        points,
        created_at,
        comment_text } = props.comment;
    return (
        <Card>
            <CardBody>
                <CardTitle className="clearfix">
                    {story_title}
                    <Button
                        color="primary float-right"
                        size="sm"
                        onClick={ props.toggleContent }
                    >
                        { props.status }
                    </Button>
                </CardTitle>
                <CardSubtitle>
                    <small className="text-muted">
                        <br />
                        {moment(created_at).format('Do MMMM')},
                                    Points : {points}
                    </small>
                </CardSubtitle>

                <CardText>
                    <Collapse isOpen={ props.collapse }>
                        <p dangerouslySetInnerHTML={ { __html: comment_text } } />
                    </Collapse>
                </CardText>
            </CardBody>
        </Card>
    );

};

export default Comment;