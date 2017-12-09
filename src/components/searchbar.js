import React, { Component } from 'react';
import _ from 'lodash';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { searchRequested } from '../actions/actions_search';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.onInputChangeThrottle = 
        _.throttle((term) => this.props.searchRequested(term, this.props.searchFor), 300);
    }

    onInputChange = (e) => {
        this.onInputChangeThrottle(e.target.value);
    }
    
    render() {
        return (
                <Row>
                    <Col md={ { size: 8, offset: 2 } } sm={ { size: 12 } }>
                    <Form>
                        <FormGroup>
                            <InputGroup>
                                <Input 
                                type="text" 
                                onChange={ this.onInputChange } 
                                />
                                <InputGroupAddon>&#128269;</InputGroupAddon>
                            </InputGroup>
                            
                        </FormGroup>
                    </Form>
                    </Col>
                </Row>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchRequested: (term, searchFor) => 
    dispatch(searchRequested(term, searchFor))
});

const mapStateToProps = (state) => ({
    searchFor: state.filters.searchFor
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);