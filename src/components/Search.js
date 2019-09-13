import React, { Component, Fragment } from "react";
import List from "./List";
import axios from "axios";

const searchlist = ["all", "anime", "manga", "character"];
const searchType = searchlist.map((item, index) => (
  <option key={index} value={item}>
    {item}
  </option>
));

class Search extends Component {
  state = {
    searchvalue: "",
    searchtype: "anime",
    isLoading: true,
    db: []
  };
  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        axios
          .get(
            `https://api.jikan.moe/v3/search/${this.state.searchtype}/?q=${
              this.state.searchvalue
            }&page=1`
          )
          .then(res => {
            return res.data.results;
          })
          .then(data => {
            this.setState({
              isLoading: false,
              db: data
            });
          })
          .catch(err => console.log(err));
      }
    );
  };

  componentDidMount() {
    const { searchvalue, searchtype } = this.state;
    console.log(searchtype, searchvalue, "test");
  }

  render() {
    const { db } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="search">
            <select
              name="searchtype"
              value={this.state.searchtype}
              onChange={this.handleChange}
            >
              {searchType}
            </select>
            <input
              type="text"
              name="searchvalue"
              value={this.state.searchvalue}
              onChange={this.handleChange}
            />
          </div>
          <List db={db} />
        </div>
      </Fragment>
    );
  }
}

export default Search;
