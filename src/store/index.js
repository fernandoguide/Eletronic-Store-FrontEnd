import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../config/ReactotronConfig';

import reducers from './ducks';
import sagas from './sagas';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const store = createStore(
    reducers,
    compose(applyMiddleware(...middleware), Reactotron.createEnhancer())
);

sagaMiddleware.run(sagas);
export default store;




// ANTIGO
// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// // eslint-disable-next-line
// import Reactotron from 'reactotron-react-js';

// import reducers from './ducks';
// import sagas from './sagas';

// const sagaMonitor =
//     process.env.NODE_ENV === 'development'
//         ? console.tron.createSagaMonitor()
//         : null;

// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// const middleware = [sagaMiddleware];

// const store = createStore(
//     reducers,
//     compose(applyMiddleware(...middleware), Reactotron.createEnhancer())
// );

// sagaMiddleware.run(sagas);
// export default store;
