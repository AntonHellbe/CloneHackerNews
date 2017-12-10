import React, { Component } from 'react';
import _ from 'lodash';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { searchRequested, setTerm } from '../actions/actions_search';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.searchThrottled =
        _.throttle(() => this.props.searchRequested(this.props.term, this.props.searchFor), 300);
    }

    onInputChange = (e) => {
        const val = e.target.value;
        this.props.setTerm(val);
        this.searchThrottled();
    }

    search = () => {
        this.props.searchRequested(this.props.term, this.props.searchFor);
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
                                value={ this.props.term }
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
    dispatch(searchRequested(term, searchFor)),
    setTerm: (term) => dispatch(setTerm(term))
});

const mapStateToProps = (state) => {
    // console.log(state.articles);
    return {
        searchFor: state.filters.searchFor,
        term: state.articles.term
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);