import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
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
    isLoading: true
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
            console.log(data);
            this.props.searchval(data);
          })
          .catch(err => console.log(err));
      }
    );
  };

  render() {
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
        </div>
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchval: data => dispatch({ type: "SEARCHTYPE", data })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Search);
