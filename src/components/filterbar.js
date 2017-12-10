import React, { Component } from 'react';
import moment from 'moment';
import { Input, InputGroup, Form, Label, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { filterByDate,
     filterByPopularity,
     setTimeSpan,
     setSearchFor } from '../actions/actions_filters';
import { searchRequested } from '../actions/actions_search';
import { mapFiltersToValues } from '../selectors/filter_selector';


class FilterBar extends Component {

    onFilterChange = (e) => {
        const selection = e.target.value;
        if (selection === 'Date') {
            this.props.filterByDate();
        }
        if (selection === 'Popularity') {
            this.props.filterByPopularity();
        }
    }

    onDateFilterChange = (e) => {
        const selection = e.target.value;
        let currentTime = moment();
        switch (selection) {
            case 'All time':
                currentTime = moment(0).valueOf();
                break;
            case 'Last 24h':
                currentTime = currentTime.subtract(24, 'hours').valueOf();
                break;
            case 'Past Week':
                currentTime = currentTime.subtract(7, 'days').valueOf();
                break;
            default:
                return currentTime;
        }

        this.props.setTimeSpan(currentTime);
    }

    onSearchFilterChange = (e) => {
        const name = e.target.value;
        this.props.setSearchFor(name);
        this.props.searchRequested(this.props.term, name);

    }

    render() {
        return (
            <Row>
                <Col 
                md={ { size: 8, offset: 2 } } 
                sm={ { size: 12 } }
                >
                    <Form inline>
                        <InputGroup style={ { marginRight: '10px' } } >
                            <Label 
                            for="search" style={ { marginRight: '5px' } }
                            >
                                Search for 
                            </Label>
                            <Input 
                            type="select" 
                            name="selectMulti" 
                            id="search" 
                            value={ this.props.filters.searchFor }
                            onChange={ this.onSearchFilterChange }
                            >
                                <option value="story">Stories</option>
                                <option value="(story, comment)">All</option>
                                <option value="comment">Comments</option>
                            </Input>
                        </InputGroup >

                        <InputGroup 
                        style={ { marginRight: '10px' } } 
                        >
                            <Label for="by" style={ { marginRight: '5px' } }>by </Label>
                            <Input 
                            type="select" 
                            name="by" 
                            id="by" 
                            value={ this.props.filterBy } 
                            onChange={ this.onFilterChange }
                            >
                                <option value="Popularity">Popularity</option>
                                <option value="Date">Date</option>
                            </Input>
                        </InputGroup>
                        
                        <InputGroup 
                        style={ { marginRight: '10px' } } 
                        >
                            <Label for="for" style={ { marginRight: '5px' } }>For</Label>
                            <Input 
                            type="select" 
                            name="selectMulti" 
                            id="for" 
                            value={ this.props.filters.time }
                            onChange={ this.onDateFilterChange }
                            >
                                <option value="All time">All time</option>
                                <option value="Last 24h">Last 24h</option>
                                <option value="Past Week">Past Week</option>
                            </Input>
                            
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        );

    }
}

const mapDispatchToProps = (dispatch) => ({
    filterByDate: () => dispatch(filterByDate()),
    filterByPopularity: () => dispatch(filterByPopularity()),
    setTimeSpan: (time) => dispatch(setTimeSpan(time)),
    setSearchFor: (name) => dispatch(setSearchFor(name)),
    searchRequested: (term, searchFor) => dispatch(searchRequested(term, searchFor))
});

const mapStateToProps = (state) => ({
    term: state.articles.term,
    filters: mapFiltersToValues(state.filters)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);