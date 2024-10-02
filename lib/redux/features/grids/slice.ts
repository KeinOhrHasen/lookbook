import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadAsyncRequest } from '@/lib/redux/features/grids/saga';
import { IGrid } from '@/src/core/interfaces/grids.model';

export interface GridsState {
  value: IGrid[];
}

const initialState: GridsState = {
  value: [],
};

const slice = createSlice({
  name: 'grids',
  initialState,
  reducers: {
    list: () => {},
    listSuccess: (state, action: PayloadAction<IGrid[]>) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const loadAsync = () => ({
  type: loadAsyncRequest,
});

export const { list, listSuccess } = slice.actions;
export default slice.reducer;
