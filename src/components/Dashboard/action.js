import axios from "axios";
import { GET_STAT_SUCCEEDED, SEARCH } from "./actionTypes.js";

export const getStats = () => (dispatch) => {
  axios.get('https://api.covid19api.com/summary').then((res) => {
      dispatch({ type: GET_STAT_SUCCEEDED, payload: res.data })
  });
};

export const search = (searchTerm) => (dispatch, getState) => {
  const state = getState();
  const searchResult = [];
  state.dashboard.countries.map((country) => {
    const countryName = country.Country.toLowerCase();
    if (countryName.includes(searchTerm.toLowerCase())) {
      searchResult.push(country);
    }
    return country;
  });
  dispatch({ type: SEARCH, payload: searchResult });
};
