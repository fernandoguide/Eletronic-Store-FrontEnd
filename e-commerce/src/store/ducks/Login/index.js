export const Types = {
    SET_LOGIN: 'LOGIN/SET_LOGIN',
    SET_LOGIN_SUCCESS: 'LOGIN/SET_LOGIN_SUCCESS',
    SET_LOGIN_ERROR: 'LOGIN/SET_LOGIN_ERROR',
};

const INITIAL_STATE = {
    data: '',
    loading: false,
    error: '',
    valid: false,
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_LOGIN: {
            return { data: '', loading: true, error: '' };
        }
        case Types.SET_LOGIN_SUCCESS: {
            return {
                data: action.data,
                loading: false,
                error: '',
                valid: action.payload.valid,
            };
        }
        case Types.SET_LOGIN_ERROR: {
            return {
                error: action.error,
                loading: false,
                valid: action.payload.valid,
            };
        }
        default:
            return state;
    }
}
