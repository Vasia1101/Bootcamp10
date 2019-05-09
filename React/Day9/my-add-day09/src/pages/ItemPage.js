import React, { Component } from 'react';
import * as API from '../api';
// import Article from '../Article';

export default class ItemPage extends Component{
    state={
        id: null,
        title: null,
        imageUrl: null,
        author: null,
        category: null,
        body: null
    }
    
    componentDidMount() {
        API.fetchArticleById(this.props.match.params.id)
        .then(item => this.setState({...item}))
    }
    handleGoBack = () =>{
      const {state} = this.props.location;
      const {category} = this.state;

      

      if (state) {
        return this.props.history.push({
          pathname: '/articles',
          search: state.from
        });
      }

      this.props.history.push({
        pathname:'/aricles',
        search: `?category=${category}`
      });
      // this.props.history.push(this.props.location.state.from);
      // this.props.history.goBack();
    };
    render() {
        const {title, imageUrl, author, category, body} = this.state;
      return (
        <>
<article>
<h2>{title}</h2>
<img src={imageUrl} alt={title}/>
<p>Author:{author}</p>
<p>Category: {category}</p>
<p>{body}</p>
<button onClick={this.handleGoBack} type='button'>Back</button>
</article>
</>
      )
    }
}
