export const Types = {
    GET_PROFILE: 'GET_PROFILE/GET_PROFILE',
    GET_PROFILE_SUCCESS: 'GET_PROFILE/GET_PROFILE_SUCCESS',
    GET_PROFILE_ERROR: 'GET_PROFILE/GET_PROFILE_ERROR',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
    valid: false,
};

export default function profile(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_PROFILE: {
            return { data: [], loading: true, error: '', valid: false };
        }
        case Types.GET_PROFILE_SUCCESS: {
            return {
                data: action.data,
                loading: false,
                error: '',
                valid: true,
            };
        }
        case Types.GET_PROFILE_ERROR: {
            return {
                data: [],
                loading: false,
                error: action.error,
                valid: false,
            };
        }
        default:
            return state;
    }
}
