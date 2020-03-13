import { put } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types as LoginTypes } from '../../ducks/Login';

export function* setLogin(action) {
    try {
        const { email, senha } = action.payload;
        console.tron.log('chegou no try');
        const response = yield api.post('/login', { email, senha });
        console.tron.log(response);
        console.log(response);
        yield put({
            type: LoginTypes.SET_LOGIN_SUCCESS,
            data: response,
        });
    } catch (error) {
        yield put({ type: LoginTypes.SET_LOGIN_ERROR, error });
    }
}
