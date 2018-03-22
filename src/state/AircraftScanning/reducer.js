const initialState = {
  aircrafts: [],
  loading: false,
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
      };
    }
    case 'GET_AIRCRAFT_FAILED': {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
