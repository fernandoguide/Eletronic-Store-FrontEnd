import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

const tron = Reactotron.configure({
    name: 'EletronicStore',
    host: '192.168.0.19',
})
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

tron.clear();

console.tron = tron;

export default tron;
