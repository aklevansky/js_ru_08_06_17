import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterSelectState from './filterSelect'
import filterDateState from './filterDate'

export default combineReducers({
    count: counterReducer,
    articles,
    filterSelectState,
    filterDateState
})