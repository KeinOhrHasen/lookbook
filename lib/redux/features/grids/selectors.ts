import { RootState } from '@/lib/redux/store';

export const selectGrids = (state: RootState) => state.grids.value;
