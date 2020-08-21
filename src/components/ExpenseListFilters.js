import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setSortByDate, setSortByAmount, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)

    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    };
    onTextChange = (e) => this.props.setTextFilter(e.target.value);

    onSortByChange = (e) => {
        if(e.target.value === 'date'){
            this.props.setSortByDate()
        }else if(e.target.value === 'amount'){
            this.props.setSortByAmount()
        }
    };
    render() {
        return (
            <div>
                <input 
                type= 'text'
                value= {this.props.filters.text}
                onChange= {this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId={"1"}
                    endDate={this.props.filters.startDate}
                    endDateId={"2"}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
        filters: state.filters

});

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setSortByDate: () => dispatch(setSortByDate()),
    setSortByAmount:() => dispatch(setSortByAmount())
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);