import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, FlatList, ListRenderItem} from 'react-native';
import {RootStackScreenProps, Device, DeviceType} from './types';
import {Button} from '../components/Button';

export const Home = (props: RootStackScreenProps<'Home'>) => {
  const [device, setDevice] = useState<Device>({id: '', type: DeviceType.NoType, name: ''});

  const devices = [
    {
      id: '01',
      type: DeviceType.HSV,
      name: '',
    },
    {
      id: '02',
      type: DeviceType.Switch,
      name: '',
    }
  ];
  
  const Item: ListRenderItem<Device> = ({ item }) => (
    <TouchableOpacity
      style={styles.deviceItem}
      onPress={() => setDevice(item)}
    >
      <Text style={[
        item.id == device.id && { color: 'blue' }
      ]}>{item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View>
        <FlatList
          style={styles.devicesContainer}
          data={devices}
          renderItem={Item}
          keyExtractor={item => item.id}
        />
        <Button
          onPress={async () => props.navigation.navigate('Device', device)}
          disabled={!device.id}
          text={'Add device'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  devicesContainer: {
    height: '90%'
  },
  deviceItem: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: .5,
    padding: 20
  },
});
