import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.js';
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducers(), applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
  ,
)

window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION();
