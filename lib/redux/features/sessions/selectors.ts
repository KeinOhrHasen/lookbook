import { RootState } from '@/lib/redux/store';

export const selectSessions = (state: RootState) => state.sessions.list;
