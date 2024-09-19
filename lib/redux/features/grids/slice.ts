// lib/redux/features/counter/slice.ts
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
    // initializeCount: (state, action: PayloadAction<any[]>) => {
    //   state.value = action.payload;
    // },
    list: () => {
      //   console.log(action.payload);
      //   state.value = action.payload;
    },

    listSuccess: (state, action: PayloadAction<IGrid[]>) => {
      console.log(action.payload);
      state.value = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const loadAsync = () => ({
  type: loadAsyncRequest,
});

export const { list, listSuccess } = slice.actions;
export default slice.reducer;
