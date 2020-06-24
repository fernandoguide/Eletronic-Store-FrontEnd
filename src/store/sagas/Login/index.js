import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
// import history from '../../../services/history';
import { Types as LoginTypes } from '../../ducks/Login';
import { Types as ProfileTypes } from '../../ducks/Profile';

export function* setLogin(action) {
    try {
        yield localStorage.clear();
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
                toast.success('Seja Bem-Vindo!');

                yield put({
                    type: LoginTypes.SET_LOGIN_SUCCESS,
                    payload: { valid: true },
                });
                const dataUser = yield api.get(
                    `/clientes/email?value=${email}`,
                    { headers: { Authorization: authorization } }
                );
                const { data } = dataUser;

                yield localStorage.setItem('token', authorization);
                yield localStorage.setItem('dataUser', JSON.stringify(data));
            }
            yield put({
                type: ProfileTypes.GET_PROFILE,
            });
        }
    } catch (error) {
        toast.error('Erro ao conectar ao servidor');
        yield put({
            type: LoginTypes.SET_LOGIN_ERROR,
            error,
            payload: { valid: false },
        });
    }
}
