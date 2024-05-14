import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum DeviceType {
  HSV,
  Switch,
  NoType
}

export type Device = {
  id: string
  type: DeviceType,
  name: string
};

export type RootStackParamList = {
  Counter: undefined;
  Device: Device;
  Home: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
