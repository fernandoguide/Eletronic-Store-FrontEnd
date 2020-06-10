import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types as CategoryTypes } from '../../ducks/Category';

export function* setCategory() {
    try {
        const response = yield call(api.get, '/categorias');
        // console.log(response);
        if (response.status === 200) {
            yield put({
                type: CategoryTypes.GET_CATEGORY_SUCCESS,
                data: response.data,
            });
        }
    } catch (error) {
        yield put({
            type: CategoryTypes.GET_CATEGORY_ERROR,
            error,
        });
    }
}
