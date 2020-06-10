import produce from 'immer';

export const Types = {
    ADD_CART: 'CART/ADD_CART',
    REMOVE_FROM_CART: 'CART/REMOVE_FROM_CART',
    UPDATE_AMOUNT: 'CART/UPDATE_AMOUNT',
};

export default function cart(state = [], action) {
    switch (action.type) {
        case Types.ADD_CART: {
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    p => p.id === action.item.id
                );
                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.item,
                        amount: 1,
                    });
                }
            });
        }
        case Types.REMOVE_FROM_CART: {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        }
        case Types.UPDATE_AMOUNT: {
            if (action.amount <= 0) {
                return state;
            }
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
}
