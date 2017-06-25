import {FILTER_DATE} from '../constants'

export default (filteredPeriod = {from: null, to: null}, action) => {

	const {	type, payload } = action;

	switch (type) {

		case FILTER_DATE:
			return payload.to !== null ? payload : filteredPeriod;
	}

	return filteredPeriod;
}