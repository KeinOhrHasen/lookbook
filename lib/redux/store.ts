// lib/redux/store.ts
import gridsReducer from '@/lib/redux/features/grids/slice';
import sessionsReducer from '@/lib/redux/features/sessions/slice';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
  const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    reducer: {
      grids: gridsReducer,
      sessions: sessionsReducer,
    },
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
