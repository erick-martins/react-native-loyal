// STYLESHEET
import merge from 'deepmerge';

var themes = [];

var components = {};

const uniqueID = () => (+new Date() + Math.random() * 100).toString(32);

const deepMergeStyles = (style1, style2) =>
  typeof style1 == 'object' && typeof style2 == 'object'
    ? merge(style1, style2)
    : [style1, style2];

/**
 * Merges styles array deeply
 * @param Array styles
 * @returns {object || array}
 */
const deepMergeStylesArray = styles => {
  let finalStyle = {};
  styles.map(style => {
    finalStyle = deepMergeStyles(finalStyle, style);
  });
  return finalStyle;
};
class ArgsHelper {
  constructor(args, props) {
    this.args = args || [];
    this.props = props || {};
  }

  has(val) {
    let self = this;
    let has = self.args.indexOf(val) >= 0;
    var callback = {
      do: action => {
        if (!has) return callback;
        action.call(this, self.args[val]);
        return callback;
      },
      replace: replacer => {
        if (!has) return callback;
        self.removeByValue(val);

        if (Array.isArray(replacer)) {
          replacer.map(self.push);
        } else {
          self.push(replacer);
        }
        return callback;
      },
      push: val => {
        if (!has) return callback;
        self.push(val);
        return callback;
      },
      remove: () => {
        if (!has) return callback;
        self.removeByValue(val);
        return callback;
      },
      else: action => {
        if (has) return callback;
        action.call(self);
        return callback;
      },
    };
    return callback;
  }

  checkProps(property) {
    return this.props.hasOwnProperty(property) && this.props[property];
  }

  hasProp(property) {
    let self = this;
    const hasProp = this.checkProps(property);
    var callback = {
      do: action => {
        if (!hasProp) return callback;
        action.call(this, self.props[property]);
        return callback;
      },
      push: val => {
        if (!hasProp) return callback;
        self.push(val);
        return callback;
      },
      remove: val => {
        if (!hasProp) return callback;
        self.removeByValue(val);
        return callback;
      },
      replace: (arr, replacer) => {
        if (!hasProp) return callback;
        self.replace(arr, replacer);
        return callback;
      },
      else: action => {
        if (hasProp) return callback;
        action.call(this);
        return callback;
      },
    };
    return callback;
  }
  push(val) {
    this.args.push(val);
    return this;
  }

  findOne(arr) {
    let self = this;
    let found = arr.some(function(v) {
      return self.args.indexOf(v) >= 0;
    });
    var callback = {
      do: action => {
        if (!found) return callback;
        action.call(this, self.props[property]);
        return callback;
      },
      push: val => {
        if (!found) return callback;
        self.push(val);
        return callback;
      },
      replace: replacer => {
        if (!found) return callback;
        self.replace(arr, replacer);
        return callback;
      },
      else: action => {
        if (found) return callback;
        action.call(this);
        return callback;
      },
    };
    return callback;
  }

  findAll(arr) {
    let self = this;
    const found = arr.every(
      (element, index, array) => self.args.indexOf(element) >= 0
    );

    var callback = {
      do: action => {
        if (!found) return callback;
        action.call(this);
        return callback;
      },
      push: val => {
        if (!found) return callback;
        self.push(val);
        return callback;
      },
      replace: replacer => {
        if (!found) return callback;
        self.replace(arr, replacer);
        return callback;
      },
      else: action => {
        if (found) return callback;
        action.call(this);
        return callback;
      },
    };
    return callback;
  }

  replace(arr, replacer) {
    if (Array.isArray(arr)) {
      arr.map(this.removeByValue);
    } else {
      this.removeByValue(arr);
    }
    if (Array.isArray(replacer)) {
      replacer.map(this.push);
    } else {
      this.push(replacer);
    }
    return this;
  }

  addMaxPriority(className) {
    return this.removeByValue(className).push(className);
  }

  removeByValue(val) {
    if (!this.args) return this;
    const idx = this.args.indexOf(val);
    if (idx >= 0) delete this.args[idx];
    return this;
  }

  getArgs() {
    return this.args;
  }
}

class CreateComponentTheme {
  constructor(componentName, theme) {
    this._theme = theme || new Theme(uniqueID());
    this._compName = componentName;
  }
  componentStyle = { light: {}, dark: {}, overrides: {}, callbacks: {} };
  light = (globalStyle, style = {}) => {
    this.componentStyle.light = {
      global: globalStyle,
      ...style,
    };
    return this;
  };
  dark = (globalStyle, style = {}) => {
    this.componentStyle.dark = {
      global: globalStyle,
      ...style,
    };
    return this;
  };
  onExtractFromProps = callback => {
    this.componentStyle.callbacks.onExtractFromProps = callback;
    return this;
  };
  onGetStyle = callback => {
    this.componentStyle.callbacks.onGetStyle = callback;
    return this;
  };
  overrideIds = styles => {
    this.componentStyle.overrides = styles;
    return this;
  };

  commit = theme => {
    let _currTheme = theme || this._theme;
    if (_currTheme.hasOwnProperty('setComponentTheme')) {
      _currTheme.setComponentTheme(this);
    }
    return _currTheme;
  };
  getTheme = () => ({ name: this._compName, style: this.componentStyle });
}

class Theme {
  static _current = {};

  constructor(themeName = 'default') {
    this._name = themeName;
  }

  getName = () => {
    return this._name;
  };

  cache = {};
  colors = { light: {}, dark: {} };

  _components = {};

  /**
   * Gets the color set of a theme
   * @param {string} theme
   * @returns {object}
   */
  getColorSet = theme => this.colors[theme] || {};

  /**
   *
   * @param  {...string} classes
   * @returns String of joined classes name, separated by underscore
   */
  mergeStyleClass = (...classes) => classes.join('_');

  /**
   * Render typography style and cache it for later
   * @param {string} cacheID
   * @param {string} theme
   * @param {string} size
   * @param {string} variant
   * @param {string} weight
   * @param {string} specific
   * @returns {[string:any]}
   */
  renderTypography = (cacheID, theme, size, variant, weight, specific) => {
    let styleTheme = styles.typography[theme];

    // set global style to return
    let _retStyle = [styles.typography.global.global];

    // Set Globals Theme
    _retStyle.push(styles.typography.global.size[size]);
    _retStyle.push(styles.typography.global.variant[variant]);
    _retStyle.push(styles.typography.global.weight[weight]);

    // Set Theme Theme
    _retStyle.push(styleTheme.size[size]);
    _retStyle.push(styleTheme.variant[variant]);
    _retStyle.push(styleTheme.weight[weight]);

    // Set Specific Theme if exists
    if (styles.typography.specific[specific]) {
      _retStyle.push(styles.typography.specific[specific]);
    }

    let finalStyle = deepMergeStylesArray(_retStyle);

    this.cache.typography[cacheID] = finalStyle;

    return finalStyle;
  };

  /**
   * Get the array for a typography configuration
   * @param {cacheID:String, theme:String, size:String, variant:String, weight:String} properties
   * @returns Array of typography Theme
   */
  getTypography = ({ theme, size, variant, weight, specific }) => {
    // Set defualts
    theme = (theme && styles.typography[theme] && theme) || 'light';
    size = (size && styles.typography[theme].size[size] && size) || 'body';
    variant =
      (variant && styles.typography[theme].variant[variant] && variant) ||
      'default';
    weight =
      (weight && styles.typography[theme].weight[weight] && weight) ||
      'regular';
    specific =
      (specific && styles.typography[theme].specific[specific] && specific) ||
      'notSpecific';

    // Generate cache id for this configuration
    var cacheID = this.mergeStyleClass(theme, size, variant, weight, specific);

    // Return cached configuration if it exists, if not, creates and returns it
    return (
      this.cache.typography[cacheID] ||
      renderTypography(cacheID, theme, size, variant, weight, specific)
    );
  };

  /**
   * Set the color set and the callbacks for when it changes
   * @param {object} light
   * @param {object} dark
   * @returns {Theme}
   */
  setColors = (light, dark) => {
    this.colors.light = light;
    this.colors.dark = dark;
    return this;
  };

  /**
   * Apply this theme to the whole project
   */
  apply = () => {
    if (Theme._current != this) {
      Theme._current = this;
    }
    for (var i in this._components) {
      if (
        this._components.hasOwnProperty(i) &&
        this._components[i].hasOwnProperty('update')
      ) {
        this._components[i].update();
      }
    }
  };

  /**
   * Creates theme
   * @param {String} nameOverride
   * @returns {Theme}
   */
  create = nameOverride => {
    this._name = nameOverride || this._name;
    let idx = Theme.getThemeIndexByName(this._name);
    const theme = {
      name: this.getName(),
      theme: this,
    };
    if (idx > 0) {
      themes[idx] = theme;
    } else {
      themes.push(theme);
    }
  };

  /**
   * Get current theme for this component
   * @param {ThemeComponent} component
   * @returns {Object}
   */
  getThemeFor = component => {
    const {
      constructor: { name },
      props,
    } = component;
    const { className, id } = props;

    if (this._components.hasOwnProperty(name)) {
      let compStyles = this._components[name];

      // Clears className string and breaks it by spaces
      var args = (className || '')
        .replace(/\s\s+/g, ' ')
        .trim()
        .split(' ');

      // Run onExtractFromProps callback if it was set
      if (compStyles.callbacks.hasOwnProperty('onExtractFromProps')) {
        let argsHelper = new ArgsHelper(args, props);
        args =
          compStyles.callbacks
            .onExtractFromProps(argsHelper, props)
            .getArgs() || args;
      }

      // Generate a Cache ID for this configuration
      let listOfArgsForName = args;
      if (id) listOfArgsForName.push(id);
      const cacheID = this.mergeStyleClass(listOfArgsForName);

      // If component cache does't exist, creates it
      this.cache[component] = this.cache[component] || {};

      // Return cached style if it was already created
      if (this.cache[component][cacheID]) {
        return this.cache[component][cacheID];
      }

      var styles = [];

      // Check if there is a dark variation selected if not, light variation will be used
      let styleVariation = compStyles.light || {};
      if (args.indexOf('dark') >= 0) {
        styleVariation = compStyles.dark || compStyles.light || {};
      }

      // Add Global to style list
      if (styleVariation.hasOwnProperty('global')) {
        styles.push(styleVariation.global);
      }

      // Add styles to the list
      for (var i in args) {
        if (styleVariation.hasOwnProperty(args[i])) {
          styles.push(styleVariation[args[i]]);
        }
      }

      // If it has an id and component has a style for this id, merge it
      id && compStyles.overrides[id] && styles.push(compStyles.overrides[id]);

      // Merge all styles together
      let finalStyle = Theme.deepMergeStylesArray(styles);

      // Run onGetStyle Callback if it was set
      if (compStyles.callbacks.hasOwnProperty('onGetStyle')) {
        finalStyle = compStyles.callbacks.onGetStyle(args, props, finalStyle);
      }

      // Add Styles to cache
      this.cache[component][cacheID] = finalStyle;

      return finalStyle;
    } else {
      return {};
    }
  };

  clearCache = component => {
    if (component) {
      delete this.cache[component];
    } else {
      this.cache = {};
    }
  };

  createStyle = (componentName, lightVariation, darkVariation, callbacks) => {
    this._components[componentName] = {
      light: lightVariation,
      dark: darkVariation,
      callbacks,
    };
  };

  setComponentTheme = componentTheme => {
    const { name, style } = componentTheme.getTheme();
    this._components[name] = style;
  };

  createComponentTheme = componentName => {
    return new CreateComponentTheme(componentName, this);
  };

  /**
   * Gets the color set of a theme on shared styles
   * @param {string} theme
   * @returns {object}
   */
  static getColorSet(theme) {
    return Theme.current.getColorSet(theme);
  }

  /**
   * Get the array for a typography configuration on shared styles
   * @param {cacheID:String, theme:String, size:String, variant:String, weight:String} properties
   * @returns Array of typography Theme
   */
  static getTypography(properties) {
    return Theme.current.getTypography(properties);
  }

  /**
   * Set the color set and the callbacks for when it changes
   * @param {object} light
   * @param {object} dark
   * @returns {Promise}
   */
  static setColors(light, dark) {
    return Theme.current.setColors(light, dark);
  }

  static register(component) {
    const uID = uniqueID();

    components[uID] = {
      uniqueID: uID,
      update: component.updateTheme,
      component,
    };
    //debugger;
    return () => {
      delete component[uID];
    };
  }

  static getThemeByName(name) {
    let idx = Theme.getThemeIndexByName(name);
    return idx > 0 ? themes[idx].theme : null;
  }
  static getThemeIndexByName(name) {
    for (var i = 0; i < themes.length; i++) {
      if (name == themes[i].name) {
        return i;
      }
    }
    return -1;
  }
  static create(theme) {
    theme.create();
  }

  static deepMergeStyles(style1, style2) {
    return deepMergeStyles(style1, style2);
  }
  static deepMergeStylesArray(styles) {
    return deepMergeStylesArray(styles);
  }

  static getCurrent() {
    return Theme._current;
  }
}

Theme._current = new Theme();

export default Theme;
