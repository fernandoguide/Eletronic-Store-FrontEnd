export const Types = {
    GET_CEP: 'CEP/GET_PRODUCT',
    GET_CEP_SUCCESS: 'CEP/GET_CEP_SUCCESS',
    GET_CEP_ERROR: 'CEP/GET_CEP_ERROR',
};

const INITIAL_STATE = {
    data: {},
    loading: false,
    error: '',
};

export default function cep(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_CEP: {
            return { data: {}, loading: true, error: '' };
        }
        case Types.GET_CEP_SUCCESS: {
            return {
                data: action.data,
                loading: false,
                error: '',
            };
        }
        case Types.GET_CEP_ERROR: {
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
