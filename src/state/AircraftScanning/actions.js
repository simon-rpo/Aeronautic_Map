import * as api from '../../api/AircraftScanning/AircraftScanningApi';

export function getAircraftSuccess(data) {
  return {
    type: 'GET_AIRCRAFT_SUCCESS',
    data,
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

export function getAircraftList() {
  return dispatch => {
    dispatch(getAircraftLoading());
    api
      .getAircraftList()
      .then(response => {
        dispatch(getAircraftSuccess(response.data.acList));
      })
      .catch(error => {
        dispatch(getAircraftFailed());
      });
  };
}
