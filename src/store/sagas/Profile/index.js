import { put } from 'redux-saga/effects';

import { Types as ProfileTypes } from '../../ducks/Profile';

export function* getProfile() {
    try {
        const du = localStorage.getItem('dataUser');
        const dataUser = JSON.parse(du);

        if (dataUser === null) {
            yield put({
                type: ProfileTypes.GET_PROFILE_ERROR,
                error: 'O usuário ainda não logou',
            });
        } else {
            yield put({
                type: ProfileTypes.GET_PROFILE_SUCCESS,
                data: dataUser,
            });
        }
    } catch (error) {
        yield put({
            type: ProfileTypes.GET_PROFILE_ERROR,
            error,
        });
    }
}
