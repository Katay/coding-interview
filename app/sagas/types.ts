import {Device} from '../screens/types';

export type IncrementBuf = {type: 'INCREMENT_BUF'; buffer: string};
export type IncrementAsync = {type: 'INCREMENT_ASYNC'};

export type AddDevice = {type: 'ADD_DEVICE'; device: Device};
