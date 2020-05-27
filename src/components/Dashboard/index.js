import React from "react";
import { connect } from "react-redux";
import Header from "./Header/header.js";
import Search from "./Search/search.js";
import CountrywiseStats from "./CountrywiseStats/countrywiseStats.js";
import { getStats, search } from "./action.js";
import "./index.css";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }

  componentWillMount() {
    this.props.getStats();
  }

  search(e) {
    if(e.target.value) {
      this.props.search(e.target.value);
    } else {
      this.props.getStats();
    }
  }

  render() {
    const { global = {}, countries = [] } = this.props.dashboard;

    return (
      <div>
        <Header global={global} />
        <div className="search-wrapper">
          <Search onChange={(e) => this.search(e)} />
        </div>
        <div className="countrywise-wrapper">
          <CountrywiseStats dataSet={countries} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getStats, search })(Dashboard);
