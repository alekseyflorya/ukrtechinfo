import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../components/DrawerContent';
import {HomeStack} from './HomeStack';
import {useTheme} from 'react-native-paper';

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      drawerContentOptions={{activeTintColor: theme.colors.focused}}>
      <Drawer.Screen name="HomeScreen" component={HomeStack} />
    </Drawer.Navigator>
  );
};
