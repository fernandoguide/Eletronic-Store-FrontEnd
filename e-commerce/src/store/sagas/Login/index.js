import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types as LoginTypes } from '../../ducks/Login';

export function* setLogin() {
    try {
        const response = yield call(api.get, '');
        yield put({
            type: LoginTypes.SET_LOGIN_SUCCESS,
            data: response.data.value,
        });
    } catch (error) {
        yield put({ type: LoginTypes.SET_LOGIN_ERROR, error });
    }
}
