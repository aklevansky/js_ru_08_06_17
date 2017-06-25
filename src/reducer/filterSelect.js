import {FILTER_SELECT} from '../constants'

export default (filteredArticles = [], action) => {

	const {	type, payload } = action;

	switch (type) {

		case FILTER_SELECT:
			return payload.map( article => article.value );
	}

	return filteredArticles;
}