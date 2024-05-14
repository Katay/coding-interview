import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {Device, DeviceType} from '../../screens/types';

interface TestState {
  counter: number;
  loading: boolean;
  device: Device;
}

const initialState: TestState = {
  counter: 0,
  loading: false,
  device: {
    id: '',
    type: DeviceType.NoType,
    name: ''
  }
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    addDeviceData: (state, action: PayloadAction<Device>) => {
      state.device = action.payload
    },
  },
});

export const {increment, decrement, incrementBy, loading, addDeviceData} = testSlice.actions;

export const selectCounter = (state: RootState) => state.test.counter;
export const selectLoading = (state: RootState) => state.test.loading;
export const selectDeviceId = (state: RootState) => state.test.device.id;

export default testSlice.reducer;
