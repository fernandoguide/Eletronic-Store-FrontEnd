import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

const tron = Reactotron.configure({
    name: 'E-COMMERCE',
    host: '192.168.85.67',
})
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

tron.clear();

console.tron = tron;

export default tron;
