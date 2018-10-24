// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button

// Core
import Button from './buttons/Button';
import Input from './input/Input';

import Icon from './icons/Icon';
import Icons from './icons/Icons';

// Utilities
import SearchBar from './searchbar/SearchBar';
import ButtonGroup from './buttons/ButtonGroup';
import TextField from './textfield/field';

// Productivity

// helpers
import Text from './text/Text';
import colors from './config/colors';
import getIconType, { registerCustomIconType } from './helpers/getIconType';
import normalize from './helpers/normalizeText';
import {
  StylingThemes,
  DefaultColors,
  DefaultTextStyle,
  LoyalStyleSheet,
  TextThemes,
  TextFieldStyle,
  ButtonThemes,
} from './config/LoyalStyle';

// DEMO
import Demo from './demo/Demo';

export {
  Button,
  ButtonGroup,
  Input,
  Text,
  SearchBar,
  Icon,
  Icons,
  colors,
  getIconType,
  registerCustomIconType,
  normalize,
  TextField,
  //TextAlt,

  // DEMO
  Demo,
  // STYLES
  StylingThemes,
  DefaultColors,
  DefaultTextStyle,
  TextFieldStyle,
  LoyalStyleSheet,
  TextThemes,
  ButtonThemes,
};
