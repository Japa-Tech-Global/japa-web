import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface Props {
  open: boolean;
  message: string;
  type: 'success' | 'error';
  actionText: string;
}

// Define the initial state using that type
const initialState: Props = {
  open: false,
  message: '',
  type: 'success',
  actionText: '',
};

// Actual Slice
export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    openFeedback(
      state,
      action: PayloadAction<{
        message?: string;
        type: 'success' | 'error';
        actionText?: string;
      }>
    ) {
      state.open = true;
      state.message = action.payload.message || 'Operation Successful';
      state.type = action.payload.type;
      state.actionText = action.payload.actionText || 'Continue';
    },

    closeFeedback(state) {
      state.open = false;
    },
  },
});

export const { openFeedback, closeFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
