import { combineReducers } from 'redux';

import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

export default combineReducers({
    Login,
    Register,
    ForgotPassword,
});
