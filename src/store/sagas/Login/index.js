import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Types as LoginTypes } from '../../ducks/Login';

export function* setLogin(action) {
    try {
        const { email, senha } = action.payload;
        if (email === '' || senha === '') {
            toast.warn('Preencha todos os campos');
            yield put({
                type: LoginTypes.SET_LOGIN_ERROR,
                error: 'Preencha todos os campos',
                payload: { valid: false },
            });
        } else {
            const response = yield api.post('/login', { email, senha });

            const { authorization } = response.headers;

            if (response.status === 200) {
                yield put({
                    type: LoginTypes.SET_LOGIN_SUCCESS,
                    payload: { valid: true },
                });
                yield localStorage.setItem('token', authorization);
            }
        }
    } catch (error) {
        toast.error('Usuário ou senha inválidos');
        yield put({
            type: LoginTypes.SET_LOGIN_ERROR,
            error,
            payload: { valid: false },
        });
    }
}
