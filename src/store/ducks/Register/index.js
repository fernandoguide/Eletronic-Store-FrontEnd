export const Types = {
    SET_REGISTER: 'REGISTER/SET_REGISTER',
    SET_REGISTER_SUCCESS: 'REGISTER/SET_REGISTER_SUCCESS',
    SET_REGISTER_ERROR: 'REGISTER/SET_REGISTER_ERROR',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_REGISTER: {
            return { data: [], loading: true, error: '' };
        }
        case Types.SET_REGISTER_SUCCESS: {
            return { data: action.data, loading: false, error: '' };
        }
        case Types.SET_REGISTER_ERROR: {
            return { loading: false, error: action.error, ...state };
        }
        default:
            return state;
    }
}
