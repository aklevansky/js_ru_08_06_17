import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {subscribe} from '../store'


class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        filterSelect: PropTypes.array,
        filterDate: PropTypes.object,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {

        const { articles, openItemId, toggleOpenItem } = this.props

        const filteredElements = articles.filter( this.checkFiltered );

        const articleElements = filteredElements.map(article => <li key={article.id}>
            <Article
                article = {article}
                date={article.date}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)



        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    checkFiltered = ( article ) => {

        return this.checkSelectFilter(article) && this.checkDateFilter(article);
    }

    checkSelectFilter = (article) => {

            if ( !this.props.filterSelect.length ) {
                return true
            }

            return this.props.filterSelect.includes(article.id);
        }

    checkDateFilter = (article) => {

            const {from, to} = this.props.filterDate;

            if ( !from ) {
                return true;
            }

            const date = new Date(article.date);
            return date >= from && date <= to; 

        }
}

export default connect(state => ({
    articles: state.articles,
    filterSelect: state.filterSelectState,
    filterDate: state.filterDateState
}))(accordion(ArticleList))