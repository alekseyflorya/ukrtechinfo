import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {Icon} from './Icons';
import {Text, View, StyleSheet} from 'react-native';
import {useTheme, List} from 'react-native-paper';
import {PreferencesContext} from '../context/PreferencesContext';
import {itemsList} from '../navigation/routesList';

export const DrawerContent = ({progress, navigation, ...rest}) => {
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const {focused} = React.useContext(PreferencesContext);

  const theme = useTheme();

  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={[styles.container, {transform: [{translateX}]}]}>
        <View
          style={{backgroundColor: '#000000', marginBottom: 25, marginTop: -5}}>
          <List.Item
            title="Menu"
            left={props => <List.Icon icon="arrow-left" color="#ffffff" />}
            onPress={() => navigation.goBack()}
            titleStyle={{
              color: '#ffffff',
              fontSize: 20,
              fontFamily: theme.fonts.medium.fontFamily,
              fontWeight: '700',
            }}
          />
        </View>
        <View>
          {itemsList.map(item => {
            if (item.childs) {
              return (
                <List.Accordion
                  key={item.label}
                  title={item.label}
                  titleStyle={{
                    color:
                      focused === item.screen
                        ? theme.colors.focused
                        : theme.colors.text,
                    fontSize: 14,
                    fontFamily: theme.fonts.medium.fontFamily,
                    fontWeight: '700',
                  }}
                  expanded={expanded}
                  onPress={handlePress}
                  left={props => (
                    <Icon
                      name={item.icon}
                      width={24}
                      height={24}
                      color={
                        focused === item.screen
                          ? theme.colors.focused
                          : theme.colors.icon
                      }
                      focused={focused === item.screen}
                      style={[props.style, {marginLeft: 15, marginRight: 15}]}
                    />
                  )}
                  right={({color}) => (
                    <List.Icon
                      icon={expanded ? 'menu-up' : 'menu-down'}
                      color={color}
                    />
                  )}>
                  <View style={{backgroundColor: theme.colors.background}}>
                    {item.childs.map(child => (
                      <List.Item
                        key={child.label}
                        title={child.label}
                        titleStyle={{
                          color:
                            focused === child.screen
                              ? theme.colors.focused
                              : theme.colors.text,
                          fontSize: 14,
                          fontFamily: theme.fonts.medium.fontFamily,
                          fontWeight: '700',
                          marginLeft: -40,
                        }}
                        onPress={() =>
                          child.screen ? navigation.navigate(child.screen) : {}
                        }
                      />
                    ))}
                  </View>
                </List.Accordion>
              );
            }
            return (
              <List.Item
                key={item.label}
                title={item.label}
                titleStyle={{
                  color:
                    focused === item.screen
                      ? theme.colors.focused
                      : theme.colors.text,
                  fontSize: 14,
                  fontFamily: theme.fonts.medium.fontFamily,
                  fontWeight: '700',
                  marginBottom: 10,
                }}
                left={props => (
                  <Icon
                    name={item.icon}
                    width={24}
                    height={24}
                    color={
                      focused === item.screen
                        ? theme.colors.focused
                        : theme.colors.icon
                    }
                    focused={focused === item.screen}
                    style={[
                      props.style,
                      {marginLeft: 15, marginRight: 15, marginTop: 5},
                    ]}
                  />
                )}
                onPress={() =>
                  item.screen ? navigation.navigate(item.screen) : {}
                }
              />
            );
          })}
        </View>
        {/*<List.Accordion*/}
        {/*  title={*/}
        {/*    <DrawerItem*/}
        {/*      label={({focused, color}) => (*/}
        {/*        <Text style={{color: focused ? theme.colors.focused : color}}>*/}
        {/*          Home*/}
        {/*        </Text>*/}
        {/*      )}*/}
        {/*      icon={({focused, color}) => (*/}
        {/*        <Icon*/}
        {/*          name="inbox"*/}
        {/*          width={24}*/}
        {/*          height={24}*/}
        {/*          color={color}*/}
        {/*          focused={focused}*/}
        {/*        />*/}
        {/*      )}*/}
        {/*      activeTintColor={theme.colors.focused}*/}
        {/*      inactiveTintColor={theme.colors.icon}*/}
        {/*      activeBackgroundColor={theme.colors.surface}*/}
        {/*      focused={true}*/}
        {/*      onPress={() => navigation.navigate('Home')}*/}
        {/*    />*/}
        {/*  }*/}
        {/*  right={({color}) => <List.Icon icon={'menu-down'} color={color} />}*/}
        {/*  style={{padding: 0}}>*/}
        {/*  <List.Item*/}
        {/*    style={{*/}
        {/*      paddingVertical: 0,*/}
        {/*      paddingLeft: 20,*/}
        {/*      backgroundColor: theme.colors.background,*/}
        {/*    }}*/}
        {/*    title={*/}
        {/*      <DrawerItem*/}
        {/*        label={({focused, color}) => (*/}
        {/*          <Text*/}
        {/*            style={{*/}
        {/*              color: focused ? theme.colors.focused : color,*/}
        {/*              padding: 0,*/}
        {/*              margin: 0,*/}
        {/*              backgroundColor: theme.colors.background,*/}
        {/*            }}>*/}
        {/*            Lorem ipsum*/}
        {/*          </Text>*/}
        {/*        )}*/}
        {/*        activeTintColor={theme.colors.focused}*/}
        {/*        inactiveTintColor={theme.colors.icon}*/}
        {/*        activeBackgroundColor={theme.colors.surface}*/}
        {/*        inactiveBackgroundColor={theme.colors.background}*/}
        {/*        focused={true}*/}
        {/*        onPress={() => navigation.navigate('Home')}*/}
        {/*      />*/}
        {/*    }*/}
        {/*  />*/}
        {/*  <List.Item*/}
        {/*    style={{paddingVertical: 0, paddingLeft: 20}}*/}
        {/*    title={*/}
        {/*      <DrawerItem*/}
        {/*        label={({focused, color}) => (*/}
        {/*          <Text style={{color: focused ? theme.colors.focused : color}}>*/}
        {/*            New Link*/}
        {/*          </Text>*/}
        {/*        )}*/}
        {/*        activeTintColor={theme.colors.focused}*/}
        {/*        inactiveTintColor={theme.colors.icon}*/}
        {/*        activeBackgroundColor={theme.colors.surface}*/}
        {/*        focused={true}*/}
        {/*        onPress={() => navigation.navigate('Home')}*/}
        {/*      />*/}
        {/*    }*/}
        {/*  />*/}
        {/*  <List.Item*/}
        {/*    style={{paddingVertical: 0, paddingLeft: 20}}*/}
        {/*    title={*/}
        {/*      <DrawerItem*/}
        {/*        label={({focused, color}) => (*/}
        {/*          <Text style={{color: focused ? theme.colors.focused : color}}>*/}
        {/*            Home Page*/}
        {/*          </Text>*/}
        {/*        )}*/}
        {/*        activeTintColor={theme.colors.focused}*/}
        {/*        inactiveTintColor={theme.colors.icon}*/}
        {/*        activeBackgroundColor={theme.colors.surface}*/}
        {/*        focused={true}*/}
        {/*        onPress={() => navigation.navigate('Home')}*/}
        {/*      />*/}
        {/*    }*/}
        {/*  />*/}
        {/*</List.Accordion>*/}
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingTop: 0,
  },
});
