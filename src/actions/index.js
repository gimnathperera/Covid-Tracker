import axios from 'axios';
import {
  GET_GLOBAL_STATUS,
  GET_GLOBAL_DAILY_STATUS,
  GET_INFECTED_STATES,
  GET_STATUS_BY_COUNTRY
} from './types';

const URL = 'https://covid19.mathdro.id/api';

export const getGlobalTotalStatus = () => async (dispatch) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(`${URL}`);

    const _globalStatus = {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    };

    dispatch({ type: GET_GLOBAL_STATUS, payload: _globalStatus });
  } catch (err) {
    console.log(err.message);
  }
};

export const getGlobalCurrentStatus = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/daily`);

    const _data = data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date
    }));

    dispatch({ type: GET_GLOBAL_DAILY_STATUS, payload: _data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getInfectedCountries = () => async (dispatch) => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${URL}/countries`);

    const _countries = countries.map((country) => country.name);
    dispatch({ type: GET_INFECTED_STATES, payload: _countries });
  } catch (err) {
    console.log(err.message);
  }
};

export const getStatusByCountry = (country) => async (dispatch) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(`${URL}/countries/${country}`);

    const _countryStatus = {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    };

    dispatch({ type: GET_STATUS_BY_COUNTRY, payload: _countryStatus });
  } catch (err) {
    console.log(err.message);
  }
};
