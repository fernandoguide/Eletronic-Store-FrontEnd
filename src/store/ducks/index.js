import { combineReducers } from 'redux';

import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Product from './Product';
import Category from './Category';
import Cart from './Cart';

export default combineReducers({
    Login,
    Register,
    ForgotPassword,
    Product,
    Category,
    Cart,
});
