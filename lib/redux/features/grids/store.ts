import { configureStore } from '@reduxjs/toolkit';

import gridsReducer from '@/lib/redux/features/grids/slice';

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      grids: gridsReducer,
    },
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
