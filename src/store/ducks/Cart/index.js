export const Types = {
    ADD_CART: 'ADD_CART/ADD_CART',
};

const INITIAL_STATE = {
    data: [],
};

export default function category(state = [], action) {
    switch (action.type) {
        case Types.ADD_CART: {
            return [...state, action.item];
        }
        default:
            return state;
    }
}
