export const Types = {
    GET_PRODUCT: 'PRODUCT/GET_PRODUCT',
    GET_PRODUCT_SUCCESS: 'PRODUCT/GET_PRODUCT_SUCCESS',
    GET_PRODUCT_ERROR: 'PRODUCT/GET_PRODUCT_ERROR',
};

const INITIAL_STATE = {
    data: {},
    loading: false,
    error: '',
};

export default function product(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_PRODUCT: {
            return { data: {}, loading: true, error: '' };
        }
        case Types.GET_PRODUCT_SUCCESS: {
            return {
                data: action.data,
                loading: false,
                error: '',
            };
        }
        case Types.GET_PRODUCT_ERROR: {
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
