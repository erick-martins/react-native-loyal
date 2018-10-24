import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText } from 'react-native';
import ThemeComponent from '../theme/ThemeComponent';

class Text extends ThemeComponent {
  render() {
    const { children, style, ...rest } = this.props;
    const { theme } = this.state;
    const mergedStyles = this.deepMergeStyles(theme, style || {});
    //debugger;
    return (
      <RNText style={mergedStyles} {...rest}>
        {children}
      </RNText>
    );
  }
}

const propTypes = {
  ...RNText.propTypes,
  children: PropTypes.any,
  className: PropTypes.string,
};

Text.propTypes = propTypes;
Text.defaultProps = { className: 'light body' };

/**
 * Headline Convenience
 */
Text.Headline = props => (
  <Text {...ThemeComponent.appendClassName(props, 'headline')}>
    {props.children}
  </Text>
);
Text.Headline.propTypes = propTypes;

/**
 * Title Convenience
 */
Text.Title = props => (
  <Text {...ThemeComponent.appendClassName(props, 'title')}>
    {props.children}
  </Text>
);
Text.Title.propTypes = propTypes;

/**
 * Title 2 Convenience
 */
Text.Title2 = props => (
  <Text {...ThemeComponent.appendClassName(props, 'title2')}>
    {props.children}
  </Text>
);
Text.Title2.propTypes = propTypes;

/**
 * Title 3 Convenience
 */
Text.Title3 = props => (
  <Text {...ThemeComponent.appendClassName(props, 'title3')}>
    {props.children}
  </Text>
);
Text.Title3.propTypes = propTypes;

/**
 * Body Convenience
 */
Text.Body = props => (
  <Text {...ThemeComponent.appendClassName(props, 'body')}>
    {props.children}
  </Text>
);
Text.Body.propTypes = propTypes;

/**
 * Alternative Body Convenience
 */
Text.AltBody = props => (
  <Text {...ThemeComponent.appendClassName(props, 'altBody')}>
    {props.children}
  </Text>
);
Text.AltBody.propTypes = propTypes;

/**
 * Large Body Convenience
 */
Text.LargeBody = props => (
  <Text {...ThemeComponent.appendClassName(props, 'largeBody')}>
    {props.children}
  </Text>
);
Text.LargeBody.propTypes = propTypes;

/**
 * Subtitle Convenience
 */
Text.Subtitle = props => (
  <Text {...ThemeComponent.appendClassName(props, 'subtitle')}>
    {props.children}
  </Text>
);
Text.Subtitle.propTypes = propTypes;

export default Text;
