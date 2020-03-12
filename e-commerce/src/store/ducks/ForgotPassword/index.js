export const Types = {
    SET_FORGOTPASSWORD: 'FORGOTPASSWORD/SET_FORGOTPASSWORD',
    SET_FORGOTPASSWORD_SUCCESS: 'FORGOTPASSWORD/SET_FORGOTPASSWORD_SUCCESS',
    SET_FORGOTPASSWORD_ERROR: 'FORGOTPASSWORD/SET_FORGOTPASSWORD_ERROR',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_FORGOTPASSWORD: {
            return { data: [], loading: true, error: '' };
        }
        case Types.SET_FORGOTPASSWORD_SUCCESS: {
            return { data: action.data, loading: false, error: '' };
        }
        case Types.SET_FORGOTPASSWORD_ERROR: {
            return { loading: false, error: action.error, ...state };
        }
        default:
            return state;
    }
}
