import { call, put } from 'redux-saga/effects';

import api from '../../../services/cep';
import { Types as CepTypes } from '../../ducks/Cep';

export function* getCep(action) {
    try {
        const { cep } = action.payload;

        const response = yield call(api.get, `/${cep}`);

        if (response.status === 200) {
            yield put({
                type: CepTypes.GET_CEP_SUCCESS,
                data: response.data,
            });
        }
    } catch (error) {
        yield put({
            type: CepTypes.GET_CEP_ERROR,
            error,
        });
    }
}
