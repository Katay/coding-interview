import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {Device} from './Device';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, useBackButtonHandler} from './navigation-utilities';
import {Home} from './Home';

const RootStack = createNativeStackNavigator<RootStackParamList>();
/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = ['Home'];

function AppStack() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Device" component={Device} />
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
}
export type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;
export const AppNavigator = function AppNavigator(props: NavigationProps) {
  useBackButtonHandler(routeName => exitRoutes.includes(routeName));

  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
