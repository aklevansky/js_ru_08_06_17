import {FILTER_DATE} from '../constants'

//не дроби редюсеры слишком сильно: объедини селект и календарь в один
export default (filteredPeriod = {from: null, to: null}, action) => {

	const {	type, payload } = action;

	switch (type) {

		case FILTER_DATE:
			return payload.to !== null ? payload : filteredPeriod;
	}

	return filteredPeriod;
}
