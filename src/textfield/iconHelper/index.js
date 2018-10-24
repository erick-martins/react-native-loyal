import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Animated, Text } from 'react-native';

import styles from './styles';

export default class IconHelper extends PureComponent {
  static defaultProps = {
    //color: '#ff5544',
  };

  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    let { children, color, ...props } = this.props;
    ////console.log('ICON HELPER color > ', color);
    if (!React.isValidElement(children)) {
      return null;
    }
    return (
      <View style={styles.container}>{children.type({ color, ...props })}</View>
    );
  }
}
