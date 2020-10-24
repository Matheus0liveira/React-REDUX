import createSagaMiddleWare from 'redux-saga';
import { Middleware } from 'redux';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


 
const sagaMiddleware = createSagaMiddleWare();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);


export { store };