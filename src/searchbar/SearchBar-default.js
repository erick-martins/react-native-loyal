import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import renderNode from '../helpers/renderNode';
import ViewPropTypes from '../config/ViewPropTypes';
import nodeType from '../helpers/nodeType';

import Input from '../input/Input';
import Icon from '../icons/Icon';
import Icons from '../icons/Icons';

const defaultSearchIcon = Icons.Search({
  size: 18,
  color: colors.grey3,
});
const defaultClearIcon = (
  <Icon type="material-community" name="close" color={colors.grey3} />
);
/*
const defaultSearchIconProps = {
  size: 18,
  color: colors.grey3,
};
const defaultClearIconProps = {
  size: 18,
  color: colors.grey3,
};*/

class SearchBar extends Component {
  focus = () => {
    this.input.focus();
  };

  blur = () => {
    this.input.blur();
  };

  clear = () => {
    this.input.clear();
    this.onChangeText('');
    this.props.onClear();
  };

  onFocus = () => {
    this.props.onFocus();
  };

  onBlur = () => {
    this.props.onBlur();
  };

  onChangeText = text => {
    this.props.onChangeText(text);
    this.setState({ isEmpty: text === '' });
  };

  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
    };
  }
  renderIcon(icon, color) {
    ////console.log("Icon", icon, color);
    if (!React.isValidElement(icon)) {
      return null;
    }

    return (
      <View>
        <IconHelper {...{ color }}>{icon}</IconHelper>
      </View>
    );
  }

  render() {
    const { theme } = this.state;
    const {
      lightTheme,
      round,
      clearIcon,
      containerStyle,
      searchIcon,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      iconContainerStyle,
      inputStyle,
      showLoading,
      loadingProps,
      placeholderTextColor,
      ...attributes
    } = this.props;
    const { isEmpty } = this.state;
    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;
    return (
      <View
        style={[
          styles.container,
          containerStyle,
          lightTheme && styles.containerLight,
        ]}
      >
        <Input
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          ref={input => (this.input = input)}
          placeholderTextColor={placeholderTextColor}
          inputStyle={[styles.input, inputStyle]}
          inputContainerStyle={[
            styles.inputContentContainer,
            inputContainerStyle,
            lightTheme && styles.inputLight,
            round && styles.round,
          ]}
          containerStyle={styles.inputContainer}
          leftIcon={renderNode(Icon, searchIcon || defaultSearchIcon, {
            iconProps: { ...((theme && theme.iconProps) || {}) },
          })}
          leftIconContainerStyle={[
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ]}
          rightIcon={
            <View style={{ flexDirection: 'row' }}>
              {showLoading && (
                <ActivityIndicator
                  style={[{ marginRight: 5 }, loadingStyle]}
                  {...otherLoadingProps}
                />
              )}
              {!isEmpty &&
                renderNode(Icon, clearIcon || defaultClearIcon, {
                  iconProps: { ...((theme && theme.clearIconProps) || {}) },
                })}
            </View>
          }
          rightIconContainerStyle={[
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
          ]}
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  clearIcon: nodeType,
  searchIcon: nodeType,
  loadingProps: PropTypes.object,
  showLoading: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  iconContainerStyle: ViewPropTypes.style,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconContainerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: Text.propTypes.style,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  placeholderTextColor: PropTypes.string,
  lightTheme: PropTypes.bool,
  round: PropTypes.bool,
};

SearchBar.defaultProps = {
  loadingProps: {},
  showLoading: false,
  lightTheme: false,
  round: false,
  placeholderTextColor: colors.grey3,
  onClear: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    backgroundColor: colors.grey0,
    padding: 8,
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
  containerLight: {
    backgroundColor: colors.grey5,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    color: colors.grey3,
  },
  inputContentContainer: {
    borderBottomWidth: 0,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: colors.searchBg,
    height: 30,
  },
  inputLight: {
    backgroundColor: colors.grey4,
  },
  round: {
    borderRadius: 15,
  },
  iconContainer: {
    marginHorizontal: 5,
    marginRight: 80,
    paddingRight: 80,
  },
});

export default SearchBar;
