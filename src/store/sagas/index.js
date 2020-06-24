import { all, takeLatest } from 'redux-saga/effects';
import { Types as LoginTypes } from '../ducks/Login';
import { Types as RegisterTypes } from '../ducks/Register';
import { Types as ForgotTypes } from '../ducks/ForgotPassword';
import { Types as ProductTypes } from '../ducks/Product';
import { Types as CategoryTypes } from '../ducks/Category';
import { Types as BuyTypes } from '../ducks/Buy';
import { Types as CepTypes } from '../ducks/Cep';
import { Types as AvatarTypes } from '../ducks/Avatar';
import { Types as ProfileTypes } from '../ducks/Profile';

import { setLogin } from './Login';
import { setRegister } from './Register';
import { setForgotPassword } from './ForgotPassword';
import { setProduct } from './Product';
import { setCategory } from './Category';
import { setBuy } from './Buy';
import { getCep } from './Cep';
import { setAvatar } from './Avatar';
import { getProfile } from './Profile';

export default function* rootSaga() {
    return yield all([
        takeLatest(BuyTypes.SET_BUY, setBuy),
        takeLatest(CategoryTypes.GET_CATEGORY, setCategory),
        takeLatest(CepTypes.GET_CEP, getCep),
        takeLatest(ForgotTypes.SET_FORGOTPASSWORD, setForgotPassword),
        takeLatest(LoginTypes.SET_LOGIN, setLogin),
        takeLatest(ProductTypes.GET_PRODUCT, setProduct),
        takeLatest(RegisterTypes.SET_REGISTER, setRegister),
        takeLatest(AvatarTypes.SET_AVATAR, setAvatar),
        takeLatest(ProfileTypes.GET_PROFILE, getProfile),
    ]);
}
