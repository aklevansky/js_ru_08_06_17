import {DELETE_ARTICLE, INCREMENT, FILTER_SELECT, FILTER_DATE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterSelect(articles) {

	return {
		type: FILTER_SELECT,
		payload: articles
	}
}

export function filterDate(period) {
	return {
		type: FILTER_DATE,
		payload: period
	}
}