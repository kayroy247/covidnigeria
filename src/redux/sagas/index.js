import { spawn } from 'redux-saga/effects'
import covidSaga from './covidSaga'

export default function* rootSaga() {
  console.log("Hello Covid-Saga!")
  yield spawn(covidSaga)
}