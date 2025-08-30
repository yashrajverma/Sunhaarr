import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.js';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from '@redux-devtools/extension';
import { PersistGate } from 'redux-persist/integration/react';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
// import { SpeedInsights } from "@vercel/speed-insights"

const sagaMiddleWare = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
  persistedReducer,
  composeWithDevTools({
    trace: true,
    traceLimit: 25,
  })(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

let persistor = persistStore(store, {});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* {process.env.NODE_ENV !== 'development' && <SpeedInsights />} */}
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <BrowserRouter>
          <ReactNotifications />
          <App />
        </BrowserRouter>
      </StrictMode>
    </PersistGate>
  </Provider>
  ,
)

window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION();
