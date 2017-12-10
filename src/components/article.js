import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';


const Article = (props) => {
    const { title,
        points,
        created_at,
        url = 'No link available',
        num_comments,
        objectID } = props.article;
    return (
        <Card
            style={ {
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
                borderRadius: '0rem'
            } }
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
                                Comments : {num_comments}
                            </Link>}
                    </small>
                </CardText>
            </CardBody>
        </Card>
    );
};

export default Article;