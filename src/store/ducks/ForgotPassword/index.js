export const Types = {
    SET_FORGOTPASSWORD: 'FORGOTPASSWORD/SET_FORGOTPASSWORD',
    SET_FORGOTPASSWORD_SUCCESS: 'FORGOTPASSWORD/SET_FORGOTPASSWORD_SUCCESS',
    SET_FORGOTPASSWORD_ERROR: 'FORGOTPASSWORD/SET_FORGOTPASSWORD_ERROR',
};

const INITIAL_STATE = {
    loading: false,
    error: '',
    valid: false,
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_FORGOTPASSWORD: {
            return { loading: true, error: '' };
        }
        case Types.SET_FORGOTPASSWORD_SUCCESS: {
            return { loading: false, error: '', valid: action.payload.valid };
        }
        case Types.SET_FORGOTPASSWORD_ERROR: {
            return {
                loading: false,
                error: action.error,
                valid: action.payload.valid,
            };
        }
        default:
            return state;
    }
}
