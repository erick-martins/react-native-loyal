import React from 'react';

import Theme from '../theme';

class ThemeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { theme: {} };
  }

  componentWillMount() {
    this.unregister = Theme.register(this);
    this.updateTheme();
  }

  componentWillUnmount() {
    this.unregister();
  }

  getTheme() {
    //console.log('getting theme', Theme.getCurrent());
    return Theme.getCurrent().getThemeFor(this);
  }

  updateTheme() {
    this.setState({
      theme: this.getTheme(),
    });
  }

  deepMergeStylesArray(styles) {
    return Theme.deepMergeStylesArray(styles);
  }
  deepMergeStyles(style1, style2) {
    return Theme.deepMergeStyles(style1, style2);
  }
}
ThemeComponent.appendClassName = (props, className) => {
  if (props.className) className = props.className + ' ' + className;
  return {
    ...props,
    className,
  };
};

export default ThemeComponent;
