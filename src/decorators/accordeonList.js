import React, {Component} from 'react';

export default (OriginalList) => class AccordeonList extends Component {

	state = {
		openArticleId: null
	}

    toggleOpenArticle = openArticleId => ev => {
    	 ev && ev.preventDefault && ev.preventDefault();
    	 
    	// если статья уже открыта, ее необходимо скрыть
    	if ( this.state.openArticleId === openArticleId ) {
    		openArticleId = null;
    	}

        this.setState({ openArticleId })
    }

	render() {
		return (<OriginalList {...this.props} openArticleId={this.state.openArticleId} toggleOpenArticle={this.toggleOpenArticle} />)
	}
}