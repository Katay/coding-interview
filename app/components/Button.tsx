import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';

type Props = {
  onPress: () => {};
  disabled: boolean;
  text: string;
  indicator?: boolean;
}

export const Button = (props: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          styles.button,
          props.disabled ? {
            backgroundColor: 'grey'
          } : { 
            backgroundColor: 'blue'
          }
        ]}
        disabled={props.disabled}
      >
        {props.indicator
          ? <ActivityIndicator/>
          : <Text style={styles.buttonText}>{props.text}</Text>
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingLeft: 20,
    paddingRight: 20,
    height: 60
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
});
