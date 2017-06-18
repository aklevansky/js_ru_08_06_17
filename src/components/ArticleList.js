import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import AccordeonList from '../decorators/accordeonList'

// стейт убрали, можно переписать в виде функции
class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
                                        id: PropTypes.string.isRequired,
                                        title: PropTypes.string.isRequired,
                                        text: PropTypes.string
                                    })),
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    static defaultProps = {
        articles: []
    }

    render() {

        const {openArticleId, toggleOpenArticle} = this.props;

        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openArticleId}
                toggleOpen = {toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default AccordeonList(ArticleList);