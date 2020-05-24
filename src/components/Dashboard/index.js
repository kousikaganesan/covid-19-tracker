import React from "react";
import { connect } from "react-redux";
import Header from "./Header/header.js";
import Search from "./Search/search.js";
import CountrywiseStats from "./CountrywiseStats/countrywiseStats.js";
import { getStats } from "./action.js";
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
    console.log(e.target.value);
  }

  render() {
    const { Global = {}, Countries = [] } = this.props.dashboard.stats;

    return (
      <div>
        <Header global={Global} />
        <div className="search-wrapper">
          <Search onChange={(e) => this.search(e)} />
        </div>
        <div className="countrywise-wrapper">
          <CountrywiseStats dataSet={Countries} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getStats })(Dashboard);
