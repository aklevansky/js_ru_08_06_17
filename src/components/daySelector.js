import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class DaySelector extends React.Component {

	state = {
		from: null,
		to: null
	}

	render() {
		const {from, to} = this.state;
		return (<section>
					{this.showSelectionTip(from, to)}
					<button onClick={this.resetDates}>Reset</button>
					<DayPicker
				          numberOfMonths={2}
				          selectedDays={[from, { from, to }]}
				          onDayClick={this.handleDayClick}
				          fixedWeeks
       				 />
				</section>)
	}

	showSelectionTip = (from, to) => {
		
		if (!from && !to) {
			return (<div>Выберите дату начала и дату конца</div>)

		} else if (!to) {
			return (<div>Выбрана дата начала: {from.toLocaleDateString('ru')}. Теперь выберите дату окончания</div>)

		} else {
			return (<div>Выбран промежуток с {from.toLocaleDateString('ru')} по {to.toLocaleDateString('ru')}</div>)			
		}
	}

	handleDayClick = (day) => {
		const range = DateUtils.addDayToRange(day, this.state);
	    this.setState(range);
	}

	resetDates = ev => this.setState({from: null, to: null});
}


