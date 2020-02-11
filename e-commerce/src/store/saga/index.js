import {all, takeLatest} from 'redux-saga/effects';
import {Types as LoginTypes} from '~/store/ducks/Ranking';


import {getLogin} from './Login';


export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.GET_RANKING, getLogin),
    
  ]);
}