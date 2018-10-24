import React from 'react';

export default (Component, content, defaultIconProps) => {
  if (content === null || content === false) {
    return null;
  }
  //console.log(content);
  //return null;
  //debugger;
  if (React.isValidElement(content)) {
    if (defaultIconProps) {
      const props = {
        ...(content.props || {}),
        ...(defaultIconProps.iconProps || {}),
        ...(defaultIconProps.iconDisabledProps || {}),
      };
      //console.log(content);
      //return null
      return content.type(props);
    } else {
      return content;
    }
    ////console.log("content.props", {...defaultIconProps.iconProps});
  }
  // Just in case
  if (content === true) {
    return <Component {...defaultIconProps || {}} />;
  }
  // if `content` is undefined the icon will be only defined by defaultIconProps
  return <Component {...defaultIconProps || {}} {...content} />;
};
