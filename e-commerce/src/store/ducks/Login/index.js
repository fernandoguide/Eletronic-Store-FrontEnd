export const Types = {
    SET_LOGIN: 'LOGIN/SET_LOGIN',
    SET_LOGIN_SUCCESS: 'LOGIN/SET_LOGIN_SUCCESS',
    SET_LOGIN_ERROR: 'LOGIN/SET_LOGIN_ERROR',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_LOGIN: {
            return { data: [], loading: true, error: '' };
        }
        case Types.SET_LOGIN_SUCCESS: {
            return { data: action.data, loading: false, error: '' };
        }
        case Types.SET_LOGIN_ERROR: {
            return { loading: false, error: action.error, ...state };
        }
        default:
            return state;
    }
}
