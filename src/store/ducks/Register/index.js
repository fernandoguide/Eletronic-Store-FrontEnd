export const Types = {
    SET_REGISTER: 'REGISTER/SET_REGISTER',
    SET_REGISTER_SUCCESS: 'REGISTER/SET_REGISTER_SUCCESS',
    SET_REGISTER_ERROR: 'REGISTER/SET_REGISTER_ERROR',
};

const INITIAL_STATE = {
    loading: false,
    error: '',
    valid: false,
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_REGISTER: {
            return { loading: true, error: '' };
        }
        case Types.SET_REGISTER_SUCCESS: {
            return {
                loading: false,
                error: '',
                valid: action.payload.valid,
            };
        }
        case Types.SET_REGISTER_ERROR: {
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
