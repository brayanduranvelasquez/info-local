import { configureStore } from '@reduxjs/toolkit';

// Local
import reservationSlice from './reservationReducer';

export const store = configureStore({
  reducer: { reservation: reservationSlice },
  devTools: import.meta.env.MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
