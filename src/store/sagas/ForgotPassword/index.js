import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Types as ForgotTypes } from '../../ducks/ForgotPassword';

export function* setForgotPassword(action) {
    try {
        const { email } = action.payload;
        if (email === '') {
            toast.warn('Por favor, informar o email da conta');
            yield put({
                type: ForgotTypes.SET_FORGOTPASSWORD_ERROR,
                payload: { valid: false },
            });
        } else {
            const response = yield call(api.post, '/auth/forgot', { email });

            if (response.status === 204) {
                toast.success(
                    'Sua nova senha foi enviada para o email informado'
                );
                yield put({
                    type: ForgotTypes.SET_FORGOTPASSWORD_SUCCESS,
                    payload: { valid: true },
                });
            }
        }
    } catch (error) {
        toast.error('Email não reconhecido em nossa base de dados');
        yield put({
            type: ForgotTypes.SET_FORGOTPASSWORD_ERROR,
            error,
            payload: { valid: false },
        });
    }
}
