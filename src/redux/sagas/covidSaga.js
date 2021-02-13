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
  try {
    const covid = yield call(getCovidData)
    yield put({ type: GET_COVID_SUCCESSFUL, payload: covid })
  } catch (error) {
    yield put({ type: GET_COVID_FAILED, payload: error });
  }

}



export default function* covidSaga() {
  yield takeEvery(GET_COVID_REQUESTED, getCovid)

}
