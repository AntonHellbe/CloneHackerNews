import React, { Component } from 'react';
import moment from 'moment';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { colors } from '../constants/action_types';


class Tree extends Component {

    render() {
        const data = this.props.data;
        const style = this.props.depth === 1 ? 
        { border: 'none', borderLeft: '2px solid #bec1c6' } : 
        { border: 'none' };
        if (!data && !data.length > 0) return null;
        return (
            <ListGroup>
                { data.map((item) => {
                    if (!item.text) return null;
                    console.log(item);
                    return (
                        <ListGroupItem style={ style }>
                            <p
                                className="text-muted"
                                style={ { fontSize: '80%' } }
                            >
                                {item.author}  {moment(item.created_at).fromNow()}
                            </p>
                            <p 
                            dangerouslySetInnerHTML={ { __html: item.text } } 
                            style={ { borderLeft: `2px solid ${colors[(this.props.depth % colors.length)]}`, // eslint-disable-line
                            paddingLeft: '7px' } } 
                            />
                            <p className="text-muted">
                                { item.points }
                            </p>
                            {item.children.length > 0 && 
                            <Tree 
                            data={ item.children } 
                            depth={ this.props.depth + 1 } 
                            /> }
                    </ListGroupItem>
                    );
                    
                }) }
            </ListGroup>
        );
    }
}

export default Tree;