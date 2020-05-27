import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types as ProductTypes } from '../../ducks/Product';

export function* setProduct(action) {
    try {
        const { page } = action.payload;

        const response = yield call(api.get, `/categorias/${page}`);

        if (response.status === 200) {
            yield put({
                type: ProductTypes.GET_PRODUCT_SUCCESS,
                data: response.data,
            });
        }
    } catch (error) {
        yield put({
            type: ProductTypes.GET_PRODUCT_ERROR,
            error,
        });
    }
}
