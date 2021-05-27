import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {PreferencesContext} from './src/context/PreferencesContext';
import {useFonts, Roboto_500Medium} from '@expo-google-fonts/roboto';
import {DrawerStack} from './src/navigation/DrawerStack';

const App = () => {
  const [fontsLoaded] = useFonts({Roboto: Roboto_500Medium});
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#FAFAFA',
      text: '#212121',
      focused: '#4285F4',
      icon: '#000000',
    },
    fonts: {
      ...PaperDefaultTheme.fonts,
      medium: {
        fontFamily: fontsLoaded ? 'Roboto' : 'sans-serif-medium',
        fontWeight: '500',
      },
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
      focused: '#4285F4',
      icon: '#ffffff',
    },
    fonts: {
      ...PaperDarkTheme.fonts,
      medium: {
        fontFamily: fontsLoaded ? 'Roboto' : 'sans-serif-medium',
        fontWeight: '500',
      },
    },
  };

  let theme = isThemeDark ? CustomDarkTheme : CustomDefaultTheme;

  const initialState = {
    focused: null,
  };

  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'SET_FOCUSED':
        return {
          ...prevState,
          focused: action.payload,
        };
      default:
        return prevState;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const preferences = {
    ...state,
    toggleTheme: () => setIsThemeDark(prev => !prev),
    setFocusedScreen: screen => {
      console.log('setFocusedScreen screen', screen);
      dispatch({type: 'SET_FOCUSED', payload: screen});
    },
  };
  return (
    <PaperProvider theme={theme}>
      <PreferencesContext.Provider value={preferences}>
        <NavigationContainer theme={theme}>
          <DrawerStack />
        </NavigationContainer>
      </PreferencesContext.Provider>
    </PaperProvider>
  );
};

export default App;
