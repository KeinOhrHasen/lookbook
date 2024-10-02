import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadAsyncRequest } from '@/lib/redux/features/grids/saga';
import { ISession } from '@/src/core/interfaces/sessions.model';

export interface SessionsState {
  list: ISession[];
}

const initialState: SessionsState = {
  list: [],
};

const slice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    sessionsList: () => {},
    sessionsListSuccess: (state, action: PayloadAction<ISession[]>) => {
      state.list = action.payload;
    },
    sessionUpdateStatus: (state, action: PayloadAction<{ status: string; id: string }>) => {},
    sessionUpdateStatusSuccess: (state, action: PayloadAction<ISession>) => {},
  },
});

export const loadAsync = () => ({
  type: loadAsyncRequest,
});

export const { sessionsList, sessionsListSuccess, sessionUpdateStatus, sessionUpdateStatusSuccess } = slice.actions;
export default slice.reducer;
