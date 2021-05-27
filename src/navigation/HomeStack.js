import React from 'react';
import HomeScreen from '../screens/Home';
import ForumScreen from '../screens/Forum';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import {Header} from '../components/Header';

const Stack = createStackNavigator();

export const HomeStack = ({navigation}) => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: theme.fonts.medium.fontFamily,
          fontWeight: theme.fonts.medium.fontWeight,
        },
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home page'}}
      />
      <Stack.Screen
        name="Forum"
        component={ForumScreen}
        options={{title: 'Forums'}}
      />
    </Stack.Navigator>
  );
};
