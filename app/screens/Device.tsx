import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectLoading, selectDeviceId } from '../features/test/testSlice';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { RootStackScreenProps } from './types';
import { AddDevice } from '../sagas/types';
import { Button } from '../components/Button';

type Props = RootStackScreenProps<'Device'>;

export const Device = (props: Props) => {
  const loading = useAppSelector(selectLoading);
  const deviceId = useAppSelector(selectDeviceId);
  const dispatch = useAppDispatch();

  const { type, name, id } = props.route.params;
  const [text, onChangeText] = useState(name);
  
  return (
    <View>
      <Text>{type} {deviceId.toString()}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={async () => dispatch<AddDevice>(
          {
            type: "ADD_DEVICE",
            device: {
              name: text,
              id,
              type
            }
          }
        )}
        text={'Next'}
        disabled={loading}
        indicator={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
});
