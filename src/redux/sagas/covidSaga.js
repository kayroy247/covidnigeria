import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  
  import {
    GET_COVID_STARTED,
    GET_COVID_SUCCESSFUL,
    GET_COVID_FAILED,
    GET_COVID_REQUESTED,
  } from '../actions/covidActions'
  
  
  import {
    getCovidData
  } from '../api/covidApi'
  
  
  function* getCovid() {
    yield put({ type: GET_COVID_STARTED })
  
    const covid = yield call(getCovidData)
     console.log(covid)
  
    yield put({ type: GET_COVID_SUCCESSFUL, payload: covid })
  }
  
  
 
  export default function* covidSaga() {
    yield takeEvery(GET_COVID_REQUESTED, getCovid)
    
  }
  