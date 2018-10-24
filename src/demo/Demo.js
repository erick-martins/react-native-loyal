import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icons } from '../index';

import IconsTab from './IconsTab';
import TypographyTab from './TypographyTab';
import ButtonsTab from './ButtonsTab';
import TextFieldsTab from './TextFieldsTab';

import setupDemoStyle from '../theme/setupDemoStyle';

setupDemoStyle();

export default createBottomTabNavigator(
  {
    Input: TextFieldsTab,
    Buttons: ButtonsTab,
    Typography: TypographyTab,
    Icons: IconsTab,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Icons') {
          icon = <Icons.Home size={25} color={tintColor} />;
        } else if (routeName === 'Typography') {
          icon = <Icons.Label size={25} color={tintColor} />;
        } else if (routeName === 'Buttons') {
          icon = <Icons.Cloud size={25} color={tintColor} />;
        } else if (routeName === 'Input') {
          icon = <Icons.Label size={25} color={tintColor} />;
        }
        return icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
