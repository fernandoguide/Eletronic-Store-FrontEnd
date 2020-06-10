import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Types as RegisterTypes } from '../../ducks/Register';

export function* setRegister(action) {
    try {
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
            const corpo = {
                nome,
                email,
                senha,
                cpfOuCnpj: '31628382740',
                tipo: 1,
                logradouro: 'Rua do meio',
                numero: '111',
                complemento: 'casa 1',
                bairro: 'Lapa',
                cep: '02805050',
                telefone1: '93883321',
                cidadeId: 2,
            };
            const response = yield call(api.post, '/clientes', corpo);
            console.tron.log(response);
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
