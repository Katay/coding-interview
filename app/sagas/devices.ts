import {delay, put, takeEvery} from 'redux-saga/effects';
import {addDeviceData, loading} from '../features/test/testSlice';
import {AddDevice} from './types';

export function* addDevice() {
  yield takeEvery<AddDevice>('ADD_DEVICE', function* ({device}) {
    yield put(loading(true));
    yield delay(2000);
    yield put(addDeviceData(device));
    yield put(loading(false));
  });
}
