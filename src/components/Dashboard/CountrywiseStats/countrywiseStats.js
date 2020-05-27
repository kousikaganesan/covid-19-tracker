import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ReactCountryFlag from "react-country-flag";

import "./countrywiseStats.css";

const columns = [
  { id: "Country", label: "Country" },
  { id: "Confirmed", label: "Total Confirmed" },
  { id: "Deaths", label: "Total Deaths" },
  { id: "Recovered", label: "Total Recovered" },
];

const CountrywiseStats = ({ dataSet = [] }) => {
  return (
    <div className="case">
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} >
                  <span className="table-head">{column.label}</span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSet.map((data) => (
              <TableRow key={data.Country}>
                <TableCell>
                  <span className="table-item">
                    <ReactCountryFlag
                      className="flag"
                      countryCode={data.CountryCode}
                      svg
                    />
                    {data.Country}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="table-item">{data.TotalConfirmed}</span>
                </TableCell>
                <TableCell>
                  <span className="table-item">{data.TotalDeaths}</span>
                </TableCell>
                <TableCell>
                  <span className="table-item">{data.TotalRecovered}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CountrywiseStats;
