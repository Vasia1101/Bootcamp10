import React, { Component } from 'react';
import queryString from 'query-string';
// import {Route} from 'react-router-dom'

import ArticleList from '../ArticleList';
import CategorySelector from '../CategorySelector'

import categories from '../categories';
import * as API from '../api';


const getCategoryFromProps = props => queryString.parse(props.location.search).category;

export default class ArticlesPage extends Component {
  state = {
    articles: []
  }
    componentDidMount () {
const category = getCategoryFromProps(this.props);
console.log(category)
if (!category) {
  return this.props.history.replace({
    pathname: this.props.location.pathname,
    search:'category=all',
  })
}
API
.fetchArticlesByCategory(category)
.then(articles => this.setState({articles}));
    }
    componentDidUpdate(prevProps) {
      const prevCategory = getCategoryFromProps(prevProps);
      const nextCategory = getCategoryFromProps(this.props);

      console.log(prevCategory)
      console.log(nextCategory)

      if (prevCategory === nextCategory) return;
      API
      .fetchArticlesByCategory(nextCategory)
      .then(articles => this.setState({articles}));
      
    }
    handleCategoryChange = category =>{
      this.props.history.push ({
        pathname: this.props.location.pathname,
        search: `category=${category}`
      })
    }
    render() {
        const {articles} = this.state;
        const {search} = this.props.location;
        const {match} = this.props;
        const currentCategory = getCategoryFromProps(this.props);
      return (
        <div>
          <h2>Article Pages</h2>
          <CategorySelector options={categories} onChange={this.handleCategoryChange} value={currentCategory}/>
          <ArticleList articles={articles} match = {match} location={search}/>
        </div>
      )
    }
}