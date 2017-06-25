import React, {Component as ReactComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ArticleList from './ArticleList';

class ArticleListFiltered extends ReactComponent {

        static propTypes = {
            // from connect
            articles: PropTypes.array,
            filterSelect: PropTypes.array,
            filterDate: PropTypes.object,
        }

		render() {

			const { articles } = this.props;

			const filteredElements = articles.filter( this.checkFiltered );

			return (<ArticleList articles={filteredElements} />)
		}

		checkFiltered = ( article ) => {

        	return this.checkSelectFilter(article) && this.checkDateFilter(article);
    	}


    	// методы для фильтрации

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
	}))(ArticleListFiltered);