import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IReservationState {
  isProcessing: boolean;
}

const initialState: IReservationState = {
  isProcessing: false,
};

const isBuyingSlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    isProcessingReservation: (state: IReservationState, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
  },
});

export const { isProcessingReservation } = isBuyingSlice.actions;
export default isBuyingSlice.reducer;
