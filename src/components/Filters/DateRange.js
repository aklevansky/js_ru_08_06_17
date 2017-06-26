import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux';
import {filterDate as filterDateAC} from '../../AC'
import 'react-day-picker/lib/style.css';

class DateRange extends Component {

   //Стейт уже не нужен, бери значения из стора, не храни значения в двух местах 
    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        this.setState(DateUtils.addDayToRange(day, this.state))
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.filterDateAC(this.state);
    }

    render() {
        const { from, to } = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    month={new Date(2016, 5)}
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(null, {filterDateAC})(DateRange)
