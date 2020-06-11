export const Types = {
    SET_BUY: 'BUY/SET_BUY',
    SET_BUY_SUCCESS: 'BUY/SET_BUY_SUCCESS',
    SET_BUY_ERROR: 'BUY/SET_BUY_ERROR',
};

const INITIAL_STATE = {
    loading: false,
    error: '',
    valid: false,
};

export default function buy(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_BUY: {
            return { loading: true, error: '' };
        }
        case Types.SET_BUY_SUCCESS: {
            return {
                loading: false,
                error: '',
                valid: action.payload.valid,
            };
        }
        case Types.SET_BUY_ERROR: {
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
