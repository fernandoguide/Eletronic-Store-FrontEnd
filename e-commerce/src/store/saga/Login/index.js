import {call, put} from 'redux-saga/effects';
import api from '~/services/api';
import {Types as LoginTypes} from '~/store/ducks/Login';

export function* getLogin() {
  try {
    const response = yield call(api.get, '');
    yield put({
      type: LoginTypes.GET_RANKING_SUCCESS,
      data: response.data.value,
    });
  } catch (error) {
    yield put({type: LoginTypes.GET_RANKING_ERROR, error});
  }
}
