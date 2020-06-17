import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Types as RegisterTypes } from '../../ducks/Register';

export function* setRegister(action) {
    try {
        const {
            nome,
            email,
            senha,
            senha2,
            telefone,
            cpf,
            logradouro,
            numero,
            bairro,
            cep,
        } = action.payload;
        if (
            nome === '' ||
            email === '' ||
            senha === '' ||
            senha2 === '' ||
            telefone === '' ||
            cpf === '' ||
            logradouro === '' ||
            numero === '' ||
            bairro === '' ||
            cep === ''
        ) {
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
            const corpo = {
                nome,
                email,
                senha,
                cpfOuCnpj: cpf,
                tipo: 1,
                logradouro,
                numero,
                complemento: '',
                bairro,
                cep,
                telefone1: telefone,
                cidadeId: 2,
            };
            const response = yield call(api.post, '/clientes', corpo);

            if (response.status !== 201) {
                toast.error('if de diferente de 201');
                yield put({
                    type: RegisterTypes.SET_REGISTER_ERROR,
                    error: 'Diferente de 201',
                    payload: { valid: false },
                });
            } else {
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
