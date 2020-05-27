import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Types as RegisterTypes } from '../../ducks/Register';

export function* setRegister(action) {
    try {
        console.tron.log(action);
        const { nome, email, senha, senha2 } = action.payload;
        if (nome === '' || email === '' || senha === '' || senha2 === '') {
            toast.warn('Preencha todos os campos');
            yield put({
                type: RegisterTypes.SET_REGISTER_ERROR,
                error: 'Preencha todos os campos',
                payload: { valid: false },
            });
        } else if (senha !== senha2) {
            toast.warn('Senhas Incompatíveis');
            yield put({
                type: RegisterTypes.SET_REGISTER_ERROR,
                error: 'Senhas Incompatíveis',
                payload: { valid: false },
            });
        } else {
            const response = yield api.post('/clientes', {
                nome,
                email,
                senha,
            });
            if (response.status === 201) {
                toast.success('Cadastrado com sucesso');
                yield put({
                    type: RegisterTypes.SET_REGISTER_SUCCESS,
                    payload: { valid: true },
                });
            }
        }
    } catch (error) {
        toast.error('Erro ao realizar o cadastro');
        yield put({
            type: RegisterTypes.SET_REGISTER_ERROR,
            error,
            payload: { valid: false },
        });
    }
}
