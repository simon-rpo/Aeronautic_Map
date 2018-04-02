import * as api from '../../api/AircraftScanning/AircraftScanningApi';

// #region "Get Aircrafts"
export function getAircraftSuccess(data, Limit, Country) {
  return {
    type: 'GET_AIRCRAFT_SUCCESS',
    data,
    Limit,
    Country,
  };
}

export function getAircraftFailed() {
  return {
    type: 'GET_AIRCRAFT_FAILED',
  };
}

export function getAircraftLoading() {
  return {
    type: 'GET_AIRCRAFT_LOADING',
  };
}

export function getAircraftList(Limit = 0, Country = '') {
  return dispatch => {
    dispatch(getAircraftLoading());
    api
      .getAircraftList()
      .then(response => {
        dispatch(getAircraftSuccess(response.data.acList, Limit, Country));
      })
      .catch(error => {
        dispatch(getAircraftFailed());
      });
  };
}
// #endregion

// #region "Filter Aircrafts"
export function setfilterAircrafts(Aircrafts, filter, type) {
  return {
    type: type,
    Aircrafts,
    filter,
  };
}

export function filterAircraftsCountry(Aircrafts, filter) {
  return dispatch => {
    dispatch(setfilterAircrafts(Aircrafts, filter, 'FILTER_AIRCRAFT_COUNTRY'));
  };
}

export function filterAircraftsNumber(Aircrafts, filter) {
  return dispatch => {
    dispatch(setfilterAircrafts(Aircrafts, filter, 'FILTER_AIRCRAFT_NUMBER'));
  };
}
// #endregion
