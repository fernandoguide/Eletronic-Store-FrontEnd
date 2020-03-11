import { all, takeLatest } from 'redux-saga/effects';
import { Types as LoginTypes } from '../ducks/Login';
import { Types as RegisterTypes } from '../ducks/Register';

import { setLogin } from './Login';
import { setRegister } from './Register';

export default function* rootSaga() {
    return yield all([
        takeLatest(LoginTypes.SET_LOGIN, setLogin),
        takeLatest(RegisterTypes.SET_REGISTER, setRegister),
    ]);
}
