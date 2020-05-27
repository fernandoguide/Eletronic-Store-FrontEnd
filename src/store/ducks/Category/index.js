export const Types = {
    GET_CATEGORY: 'CATEGORY/GET_CATEGORY',
    GET_CATEGORY_SUCCESS: 'CATEGORY/GET_CATEGORY_SUCCESS',
    GET_CATEGORY_ERROR: 'CATEGORY/GET_CATEGORY_ERROR',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
};

export default function category(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_CATEGORY: {
            return { data: [], loading: true, error: '' };
        }
        case Types.GET_CATEGORY_SUCCESS: {
            return {
                data: action.data.reverse(),
                loading: false,
                error: '',
            };
        }
        case Types.GET_CATEGORY_ERROR: {
            return {
                data: [],
                loading: false,
                error: action.error,
            };
        }
        default:
            return state;
    }
}
