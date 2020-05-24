import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}><b>{column.label}</b></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSet.map((data) => (
              <TableRow key={data.Country}>
                <TableCell>{data.Country}</TableCell>
                <TableCell>{data.TotalConfirmed}</TableCell>
                <TableCell>{data.TotalDeaths}</TableCell>
                <TableCell>{data.TotalRecovered}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CountrywiseStats;
