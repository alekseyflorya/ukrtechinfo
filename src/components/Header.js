import React from 'react';
import {StatusBar} from 'react-native';
import {Appbar, useTheme, Menu, IconButton} from 'react-native-paper';
import {PreferencesContext} from '../context/PreferencesContext';

export const Header = ({scene, previous, navigation}) => {
  const theme = useTheme();
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const {toggleTheme} = React.useContext(PreferencesContext);

  const [visible, setVisible] = React.useState(true);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <>
      <StatusBar backgroundColor={theme.colors.background} barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Appbar.Header style={{backgroundColor: theme.colors.surface}}>
        {previous ? (
          <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
        ) : (
          <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        )}
        <Appbar.Content title={title} color={theme.colors.text} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item onPress={toggleTheme} title="Switch theme" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </Appbar.Header>
    </>
  );
};
