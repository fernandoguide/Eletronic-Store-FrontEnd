import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Types as BuyTypes } from '../../ducks/Buy';
import { Types as CartTypes } from '../../ducks/Cart';

export function* setBuy(action) {
    try {
        console.tron.log(action);
        const { pedido } = action.payload;
        const response = yield api.post('/pedidos', pedido);

        if (response.status === 201) {
            toast.success('Compra realizada com sucesso!');
            yield put({
                type: BuyTypes.SET_BUY_SUCCESS,
                payload: { valid: true },
            });

            yield put({
                type: CartTypes.CLEAR_CART,
            });
        } else {
            yield put({
                type: BuyTypes.SET_BUY_ERROR,
                error: 'caiu no else',
                payload: { valid: false },
            });
        }
    } catch (error) {
        toast.error('Erro ao conectar ao servidor');
        yield put({
            type: BuyTypes.SET_BUY_ERROR,
            error,
            payload: { valid: false },
        });
    }
}
