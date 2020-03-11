import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types as RegisterTypes } from '../../ducks/Register';

export function* setRegister() {
    try {
        const response = yield call(api.get, '');
        yield put({
            type: RegisterTypes.SET_REGISTER_SUCCESS,
            data: response.data.value,
        });
    } catch (error) {
        yield put({ type: RegisterTypes.SET_REGISTER_ERROR, error });
    }
}
