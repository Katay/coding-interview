import {all, call, spawn} from 'redux-saga/effects';
import {incrementAsync, incrementBuf} from './sagas/increment';
import {addDevice} from './sagas/devices';

export function* rootSaga() {
  const sagas = [incrementAsync, incrementBuf, addDevice];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
