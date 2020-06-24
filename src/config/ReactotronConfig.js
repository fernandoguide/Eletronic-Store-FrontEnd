// eslint-disable-next-line
import Reactotron from 'reactotron-react-js';
// eslint-disable-next-line
import { reactotronRedux } from 'reactotron-redux';
// eslint-disable-next-line
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
    const tron = Reactotron.configure({
        name: 'EletronicStore',
    })
        .use(reactotronRedux())
        .use(reactotronSaga())
        .connect();

    tron.clear();

    console.tron = tron;
}

// const tron = Reactotron.configure({
//     name: 'EletronicStore',
//     host: '192.168.0.16',
// })
//     .use(reactotronRedux())
//     .use(reactotronSaga())
//     .connect();

// tron.clear();

// console.tron = tron;

// export default tron;
