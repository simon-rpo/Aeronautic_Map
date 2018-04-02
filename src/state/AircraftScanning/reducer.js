const initialState = {
  aircrafts: [],
  loading: false,
  aircraftFiltered: [],
};

export default function aircraftReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_AIRCRAFT_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'GET_AIRCRAFT_SUCCESS': {
      return {
        ...state,
        aircrafts: action.data,
        loading: false,
        aircraftFiltered: [],
      };
    }
    case 'GET_AIRCRAFT_FAILED': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'FILTER_AIRCRAFT_COUNTRY': {
      return {
        ...state,
        aircraftFiltered: action.Aircrafts.filter(
          a => a.Cou.toLowerCase().indexOf(action.filter) >= 0,
        ),
      };
    }
    case 'FILTER_AIRCRAFT_NUMBER': {
      return {
        ...state,
        aircraftFiltered: action.Aircrafts.splice(0, action.filter),
      };
    }
    default:
      return state;
  }
}
