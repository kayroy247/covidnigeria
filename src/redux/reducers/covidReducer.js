import {
  GET_COVID_FAILED,
  GET_COVID_SUCCESSFUL,
  GET_COVID_STARTED
} from '../actions/covidActions';

// This is the covid state
const initialState = {
  loading: false,
  covid: null,
  error: null
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COVID_STARTED:
      return {
        ...state,
        loading: true
      }

    case GET_COVID_SUCCESSFUL:
      return {
        ...state,
        covid: payload,
        loading: false,
        error: null
      }

    case GET_COVID_FAILED:
      return {
        ...state,
        loading: false,
        covid: null,
        error: payload
      }
    default:
      return state
  }
}