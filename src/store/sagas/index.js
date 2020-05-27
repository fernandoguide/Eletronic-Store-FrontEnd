import { all, takeLatest } from 'redux-saga/effects';
import { Types as LoginTypes } from '../ducks/Login';
import { Types as RegisterTypes } from '../ducks/Register';
import { Types as ForgotTypes } from '../ducks/ForgotPassword';
import { Types as ProductTypes } from '../ducks/Product';
import { Types as CategoryTypes } from '../ducks/Category';

import { setLogin } from './Login';
import { setRegister } from './Register';
import { setForgotPassword } from './ForgotPassword';
import { setProduct } from './Product';
import { setCategory } from './Category';

export default function* rootSaga() {
    return yield all([
        takeLatest(LoginTypes.SET_LOGIN, setLogin),
        takeLatest(RegisterTypes.SET_REGISTER, setRegister),
        takeLatest(ForgotTypes.SET_FORGOTPASSWORD, setForgotPassword),
        takeLatest(ProductTypes.GET_PRODUCT, setProduct),
        takeLatest(CategoryTypes.GET_CATEGORY, setCategory),
    ]);
}
