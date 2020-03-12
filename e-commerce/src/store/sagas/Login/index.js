import { put } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types as LoginTypes } from '../../ducks/Login';

export function* setLogin(action) {
    try {
        const { email, password } = action.payload;
        const response = yield api.post('/login', { email, password });
        yield put({
            type: LoginTypes.SET_LOGIN_SUCCESS,
            data: response,
        });
    } catch (error) {
        yield put({ type: LoginTypes.SET_LOGIN_ERROR, error });
    }
}
