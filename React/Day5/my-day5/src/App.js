import React, { Component } from 'react';
// import Toggle from './Toggle';
// import SignUpForm from './Form';
import Spinner from './Spiner'
import axios from 'axios';
import ArticleList from './ArticleList'
import './App.css';



const mapper = articles => {
  
  return articles.map (({objectID,title, url}) => ({
    id:objectID,
    link:url,
    name:title
  }));
}
const API_URL = 'https://hn.algolia.com/api/v1/search?query=react';
class App extends Component {
  state = {
    articles:[],
    isLoading: false
    
  }
 componentDidMount(){
  this.setState({isLoading:true}) 
  axios
   .get(API_URL).then(response => 
    this.setState({articles:mapper(response.data.hits), isLoading:false}))
    .catch(error => this.setState({error, isLoading:false}));
   
 }
  render() {
    const {articles, isLoading, error} = this.state;
    return (
      <div>
     <h1>Axios</h1>
     {error && <p>{error.message}</p>}
     {isLoading ? <Spinner/> : <ArticleList articles={articles} />}
      
      </div>
    );
  }
}

export default App;
