import React, { Component } from 'react';
import './SearchBar.scss';
import queryString from 'query-string';
import { withRouter } from 'react-router'


/* SearchBar */
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      }
  this.onChange = this.onChange.bind(this);
  this.searchPage = this.searchPage.bind(this);
  }

 onChange(e){
   this.setState({
     [e.target.name]: e.target.value,
   })
 }

/* if you search is fine, redirect to SearchPage component */
 searchPage(){
   const { history } = this.props;
   const query = queryString.stringify(this.state)
   history.push(`/search?${query}`)
 }

  render() { 
    const {keyword} = this.state
    return (
      <div className="search">
        <form onSubmit={this.searchPage}>
        <input 
        type="text" 
        placeholder="Search.." 
        value={keyword}
        onChange={this.onChange}
        name="keyword"></input>
        <button type="submit">Recherche</button>
        </form>
      </div>
      );
  }
}
 
export default withRouter(SearchBar);