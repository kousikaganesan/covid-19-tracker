import React from "react";
import { connect } from "react-redux";

import { getStats } from "./action.js";

class Dashboard extends React.Component {
  state = {};

  componentWillMount() {
    this.props.getStats();
  }

  render() {
    return (
      <div>
        Dashboard :
        <table width="100%">
          <tr>
            <th>Country</th>
            <th>New Confirmed</th>
            <th>Total Confirmed</th>
            <th>New Deaths</th>
            <th>Total Deaths</th>
            <th>New Recovered</th>
            <th>Total Recovered</th>
          </tr>

          {this.props.dashboard &&
          this.props.dashboard.data &&
          this.props.dashboard.data.data &&
          this.props.dashboard.data.data.Countries ? (
            this.props.dashboard.data.data.Countries.map((stat) => (
              <tr>
                <td>{stat.Country}</td>
                <td>{stat.NewConfirmed}</td>
                <td>{stat.TotalConfirmed}</td>
                <td>{stat.NewDeaths}</td>
                <td>{stat.TotalDeaths}</td>
                <td>{stat.NewRecovered}</td>
                <td>{stat.TotalRecovered}</td>
              </tr>
            ))
          ) : (
            <div>No result</div>
          )}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getStats })(Dashboard);
