import React, { Component } from 'react';
import moment from 'moment';
import { ListGroup, ListGroupItem } from 'reactstrap';


class Tree extends Component {

    render() {
        const data = this.props.data;
        console.log(data);
        if (!data && !data.length > 0) return null;
        return (
            <ListGroup style={ { border: 'none' } }>
                { data.map((item) => {
                    if (!item.text) return null;
                    return (
                        <ListGroupItem style={ { border: 'none' } }>
                            <p
                                className="text-muted"
                                style={ { fontSize: '80%' } }
                            >
                                {item.author}  {moment(item.created_at).fromNow()}
                            </p>
                            <p 
                            dangerouslySetInnerHTML={ { __html: item.text } } 
                            style={ { borderLeft: '2px dotted #bec1c6', paddingLeft: '7px' } } 
                            />
                            <p className="text-muted">
                                { item.points }
                            </p>
                            { item.children.length > 0 && <Tree data={ item.children } /> }
                    </ListGroupItem>
                    );
                    
                }) }
            </ListGroup>
        );
    }
}

export default Tree;