import { combineReducers } from 'redux';

import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Product from './Product';
import Category from './Category';
import Cart from './Cart';
import Buy from './Buy';
import Cep from './Cep';
import Avatar from './Avatar';
import Profile from './Profile';

export default combineReducers({
    Avatar,
    Buy,
    Cart,
    Category,
    Cep,
    ForgotPassword,
    Login,
    Product,
    Register,
    Profile,
});
