export const Types = {
    SET_AVATAR: 'AVATAR/SET_AVATAR',
    SET_AVATAR_SUCCESS: 'AVATAR/SET_AVATAR_SUCCESS',
    SET_AVATAR_ERROR: 'AVATAR/SET_AVATAR_ERROR',
};

const INITIAL_STATE = {
    loading: false,
    error: '',
    valid: false,
};

export default function avatar(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_AVATAR: {
            return { loading: true, error: '' };
        }
        case Types.SET_AVATAR_SUCCESS: {
            return {
                loading: false,
                error: '',
                valid: action.payload.valid,
            };
        }
        case Types.SET_AVATAR_ERROR: {
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
