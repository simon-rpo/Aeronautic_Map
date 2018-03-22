import { combineReducers } from 'redux';
import aircraftScanning from './AircraftScanning/reducer';

export default combineReducers({
  home: (state = 'Test') => state,
  aircraftScanning,
});
