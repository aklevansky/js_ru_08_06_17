import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterSelect as filterAC} from '../../AC'
import store from '../../store'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    state = {
        selected: []
    }

    static propTypes = {
        articles: PropTypes.array.isRequired,
        selectedArticles: PropTypes.array,
        filterAC: PropTypes.func
    };

    // componentDidUpdate() {
    //     this.unsubscribe = store.subscribe(this.changeListener);
    // }

    // componentWillUnmount() {
    //     this.unsubscribe();
    // }

    // changeListener = () => {
    //     const updatedSelection = this.state.selected.filter( (article) => this.props.articles.includes(article) );
    //     this.setState({selected: updatedSelection});
    // }


    handleChange = selected => {
        this.setState({selected});
        this.props.filterAC(selected);
    }

    render() {
        const { selected } = this.state
        const { articles } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect( null, {filterAC} )(SelectFilter)