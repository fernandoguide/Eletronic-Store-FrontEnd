import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Types as AvatarTypes } from '../../ducks/Avatar';

export function* setAvatar(action) {
    try {
        const { data } = action.payload;

        const response = yield call(api.post, '/clientes/picture', data);

        if (response.status !== 201) {
            toast.error('Arquivo inválido');
            yield put({
                type: AvatarTypes.SET_AVATAR_ERROR,
                error: 'Diferente de 201',
                payload: { valid: false },
            });
        } else {
            toast.success('Foto editada com sucesso');
            yield put({
                type: AvatarTypes.SET_AVATAR_SUCCESS,
                payload: { valid: true },
            });
        }
    } catch (error) {
        toast.error('500tão da massa');
        yield put({
            type: AvatarTypes.SET_AVATAR_ERROR,
            error,
            payload: { valid: false },
        });
    }
}
