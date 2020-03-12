import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types as ForgotTypes } from '../../ducks/ForgotPassword';

export function* setForgotPassword() {
    try {
        const response = yield call(api.get, '');
        yield put({
            type: ForgotTypes.SET_FORGOTPASSWORD_SUCCESS,
            data: response.data.value,
        });
    } catch (error) {
        yield put({ type: ForgotTypes.SET_FORGOTPASSWORD_ERROR, error });
    }
}
