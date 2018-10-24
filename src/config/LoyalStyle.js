import { StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import combineStyles from 'react-combine-styles';

function fontSizePerc(fontSize, perc) {
  return (fontSize / 100) * (perc / 5);
}

const StylingThemes = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
};

const DefaultColors = {
  // THEMES
  [StylingThemes.LIGHT]: {
    BRAND_1: '#141C45',
    BRAND_2: '#263C86',
    BRAND_3: '#1A77B5',
    BRAND_4: '#63B2DB',
    BRAND_5: '#0A0F24',
    FEATURED: '#CED242',

    // GRAYS
    GRAY_1: '#63717A',
    GRAY_2: '#D2DCDE',
    GRAY_3: '#EDF4F6',
    GRAY_4: '#F7FAFB',
    GRAY_5: '#FFFFFF',

    // SYSTEM
    SUCCESS: '#21D48F',
    SECUNDARY: '#263C86',
    WARNING: '#FBC979',
    ERROR: '#FF5758',
  },
  [StylingThemes.DARK]: {
    BRAND_1: '#141C45',
    BRAND_2: '#263C86',
    BRAND_3: '#1A77B5',
    BRAND_4: '#63B2DB',
    BRAND_5: '#0A0F24',
    FEATURED: '#CED242',

    // GRAYS
    GRAY_1: '#63717A',
    GRAY_2: '#D2DCDE',
    GRAY_3: '#EDF4F6',
    GRAY_4: '#F7FAFB',
    GRAY_5: '#FFFFFF',

    // SYSTEM
    SUCCESS: '#21D48F',
    SECUNDARY: '#263C86',
    WARNING: '#FBC979',
    ERROR: '#FF5758',
  },
};
const DefaultFontFamilies = {
  DEFAULT: 'Open Sans',
  FEATURED: 'Circular',
};
const DefaultFontWeighties = {
  BOOK: '100',
  REGULAR: '300',
  BOLD: '700',
  BLACK: '900',
};

const DefaultTextStyle = {
  [StylingThemes.LIGHT]: StyleSheet.create({
    HEADLINE: {
      fontSize: normalize(40),
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(51),
    },

    TITLE_1: {
      fontSize: normalize(30),
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(38),
    },
    TITLE_2: {
      fontSize: normalize(30),
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BOOK,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(34),
    },
    TITLE_3: {
      fontSize: normalize(20),
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(22),
    },

    BODY: {
      fontSize: normalize(13),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      lineHeight: normalize(16),
      letterSpacing: fontSizePerc(13, 40),
    },
    BODY_BOLD: {
      fontSize: normalize(13),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.BOLD,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      lineHeight: normalize(16),
      letterSpacing: fontSizePerc(13, 40),
    },
    BODY_FEATURED: {
      fontSize: normalize(13),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(16),
      letterSpacing: fontSizePerc(13, 40),
    },
    BODY_FEATURED_BOLD: {
      fontSize: normalize(13),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.BOLD,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(16),
      letterSpacing: fontSizePerc(13, 40),
    },
    BODY_SECUNDARY: {
      fontSize: normalize(15),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      lineHeight: normalize(18),
      letterSpacing: fontSizePerc(15, 40),
    },
    BODY_SECUNDARY_BOLD: {
      fontSize: normalize(15),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.BOLD,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      lineHeight: normalize(18),
      letterSpacing: fontSizePerc(15, 40),
    },
    BODY_SECUNDARY_FEATURED: {
      fontSize: normalize(15),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(18),
      letterSpacing: fontSizePerc(15, 40),
    },
    BODY_SECUNDARY_FEATURED_BOLD: {
      fontSize: normalize(15),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.BOLD,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(18),
      letterSpacing: fontSizePerc(15, 40),
    },
    BODY_LARGE: {
      fontSize: normalize(20),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      lineHeight: normalize(25),
      letterSpacing: fontSizePerc(20, 40),
    },
    BODY_LARGE_BOLD: {
      fontSize: normalize(20),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.BOLD,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      lineHeight: normalize(25),
      letterSpacing: fontSizePerc(20, 40),
    },
    BODY_LARGE_FEATURED: {
      fontSize: normalize(20),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(25),
      letterSpacing: fontSizePerc(20, 40),
    },
    BODY_LARGE_FEATURED_BOLD: {
      fontSize: normalize(20),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.BOLD,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: normalize(25),
      letterSpacing: fontSizePerc(20, 40),
    },
    BODY_TRANSPARENT: {
      fontSize: normalize(13),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      lineHeight: normalize(16),
      letterSpacing: fontSizePerc(13, 40),
      opacity: 0.5,
    },

    SUBTITLE: {
      fontSize: normalize(10),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      lineHeight: normalize(13),
      letterSpacing: fontSizePerc(10, 40),
    },

    SUCCESS: {
      fontSize: normalize(10),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].SUCCESS,
      lineHeight: normalize(13),
      letterSpacing: fontSizePerc(10, 40),
    },
    ERROR: {
      fontSize: normalize(10),
      fontFamily: DefaultFontFamilies.DEFAULT,
      fontWeight: DefaultFontWeighties.REGULAR,
      color: DefaultColors[StylingThemes.LIGHT].ERROR,
      lineHeight: normalize(13),
      letterSpacing: fontSizePerc(10, 40),
    },
  }),
  [StylingThemes.DARK]: StyleSheet.create({
    HEADLINE: {
      fontSize: normalize(40),
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      lineHeight: 51,
    },
  }),
};

let Constants = {
  ICON_MARGIN_RIGHT: 5,
};

let TextThemes = {
  LIGHT_HEADLINE: { theme: StylingThemes.LIGHT, variant: 'HEADLINE' },
  LIGHT_TITLE_1: { theme: StylingThemes.LIGHT, variant: 'TITLE_1' },
  LIGHT_TITLE_2: { theme: StylingThemes.LIGHT, variant: 'TITLE_2' },
  LIGHT_TITLE_3: { theme: StylingThemes.LIGHT, variant: 'TITLE_3' },

  LIGHT_BODY: { theme: StylingThemes.LIGHT, variant: 'BODY' },
  LIGHT_BODY_BOLD: { theme: StylingThemes.LIGHT, variant: 'BODY_BOLD' },
  LIGHT_BODY_FEATURED: { theme: StylingThemes.LIGHT, variant: 'BODY_FEATURED' },
  LIGHT_BODY_FEATURED_BOLD: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_FEATURED_BOLD',
  },

  LIGHT_BODY_SECUNDARY: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_SECUNDARY',
  },
  LIGHT_BODY_SECUNDARY_BOLD: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_SECUNDARY_BOLD',
  },
  LIGHT_BODY_SECUNDARY_FEATURED: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_SECUNDARY_FEATURED',
  },
  LIGHT_BODY_SECUNDARY_FEATURED_BOLD: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_SECUNDARY_FEATURED_BOLD',
  },

  LIGHT_BODY_LARGE: { theme: StylingThemes.LIGHT, variant: 'BODY_LARGE' },
  LIGHT_BODY_LARGE_BOLD: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_LARGE_BOLD',
  },
  LIGHT_BODY_LARGE_FEATURED: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_LARGE_FEATURED',
  },
  LIGHT_BODY_LARGE_FEATURED_BOLD: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_LARGE_FEATURED_BOLD',
  },

  LIGHT_BODY_TRANSPARENT: {
    theme: StylingThemes.LIGHT,
    variant: 'BODY_TRANSPARENT',
  },
  LIGHT_SUBTITLE: { theme: StylingThemes.LIGHT, variant: 'SUBTITLE' },
  LIGHT_SUCCESS: { theme: StylingThemes.LIGHT, variant: 'SUCCESS' },
  LIGHT_ERROR: { theme: StylingThemes.LIGHT, variant: 'ERROR' },
};

let ButtonThemes = {
  LARGE_FEATURED: {
    containerStyle: {},
    buttonStyle: {
      borderRadius: 45,
      backgroundColor: DefaultColors[StylingThemes.LIGHT].FEATURED,
      paddingVertical: 16,
      paddingHorizontal: 26,
      height: 70,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      backgroundColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
    },
    iconContainerStyle: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    loadingStyle: {},
    loadingProps: {},
  },
  LARGE_DEFAULT: {
    containerStyle: {},
    buttonStyle: {
      borderRadius: 10,
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      borderWidth: 2,
      backgroundColor: 'white',
      paddingVertical: 16,
      paddingHorizontal: 26,
      height: 70,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      backgroundColor: 'white',
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      opacity: 0.5,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
        opacity: 0.5,
      },
    },
    iconContainerStyle: {},
    loadingStyle: {},
    loadingProps: {},
  },

  LARGE_FEATURED_SUCCESS: {
    buttonStyle: {
      borderRadius: 45,
      backgroundColor: DefaultColors[StylingThemes.LIGHT].SUCCESS,
      paddingVertical: 16,
      paddingHorizontal: 26,
      height: 70,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      backgroundColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
    },
    iconContainerStyle: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
  },
  LARGE_DEFAULT_SUCCESS: {
    buttonStyle: {
      borderRadius: 10,
      borderColor: DefaultColors[StylingThemes.LIGHT].SUCCESS,
      borderWidth: 2,
      backgroundColor: 'white',
      paddingVertical: 16,
      paddingHorizontal: 26,
      height: 70,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].SUCCESS,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      backgroundColor: 'white',
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      opacity: 0.5,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].SUCCESS,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
        opacity: 0.5,
      },
    },
  },

  LARGE_FEATURED_WARNING: {
    buttonStyle: {
      borderRadius: 45,
      backgroundColor: DefaultColors[StylingThemes.LIGHT].WARNING,
      paddingVertical: 16,
      paddingHorizontal: 26,
      height: 70,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      backgroundColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
    },
    iconContainerStyle: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
  },
  LARGE_DEFAULT_WARNING: {
    buttonStyle: {
      borderRadius: 10,
      borderColor: DefaultColors[StylingThemes.LIGHT].WARNING,
      borderWidth: 2,
      backgroundColor: 'white',
      paddingVertical: 16,
      paddingHorizontal: 26,
      height: 70,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].WARNING,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      backgroundColor: 'white',
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      opacity: 0.5,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].WARNING,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
        opacity: 0.5,
      },
    },
  },

  LARGE_FEATURED_ERROR: {
    buttonStyle: {
      borderRadius: 45,
      backgroundColor: DefaultColors[StylingThemes.LIGHT].ERROR,
      paddingVertical: 16,
      paddingHorizontal: 26,
      height: 70,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      backgroundColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
    },
    iconContainerStyle: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
  },
  LARGE_DEFAULT_ERROR: {
    buttonStyle: {
      borderRadius: 10,
      borderColor: DefaultColors[StylingThemes.LIGHT].ERROR,
      borderWidth: 2,
      backgroundColor: 'white',
      paddingVertical: 16,
      paddingHorizontal: 26,
      height: 70,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].ERROR,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      backgroundColor: 'white',
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      opacity: 0.5,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].ERROR,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
        opacity: 0.5,
      },
    },
  },

  SMALL_FEATURED: {
    containerStyle: {},
    buttonStyle: {
      borderRadius: 45,
      backgroundColor: DefaultColors[StylingThemes.LIGHT].FEATURED,
      paddingVertical: 6,
      paddingHorizontal: 26,
      height: 50,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      backgroundColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
    },
    iconContainerStyle: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    loadingStyle: {},
    loadingProps: {},
  },
  SMALL_DEFAULT: {
    containerStyle: {},
    buttonStyle: {
      borderRadius: 10,
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      borderWidth: 2,
      backgroundColor: 'white',
      paddingVertical: 6,
      paddingHorizontal: 26,
      height: 50,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      backgroundColor: 'white',
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      opacity: 0.5,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
        opacity: 0.5,
      },
    },
    iconContainerStyle: {},
    loadingStyle: {},
    loadingProps: {},
  },

  FLAT_FEATURED: {
    containerStyle: {},
    buttonStyle: {
      backgroundColor: 'transparent',
      paddingVertical: 16,
      paddingHorizontal: 26,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      backgroundColor: 'transparent',
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      opacity: 0.5,
    },
    iconContainerStyle: {},
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_4,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
        opacity: 0.5,
      },
    },
  },
  FLAT_DEFAULT: {
    containerStyle: {},
    buttonStyle: {
      backgroundColor: 'transparent',
      paddingVertical: 16,
      paddingHorizontal: 26,
    },
    titleStyle: {
      fontSize: 15,
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      fontFamily: DefaultFontFamilies.FEATURED,
      fontWeight: DefaultFontWeighties.BLACK,
    },
    disabledStyle: {
      backgroundColor: 'transparent',
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      opacity: 0.5,
    },
    iconContainerStyle: {},
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginRight: Constants.ICON_MARGIN_RIGHT,
        opacity: 0.5,
      },
    },
  },
  ICON_FEATURED: {
    containerStyle: {},
    buttonStyle: {
      borderRadius: 5,
      backgroundColor: DefaultColors[StylingThemes.LIGHT].FEATURED,
      padding: 6,
      height: 50,
      width: 50,
    },
    titleStyle: {},
    disabledStyle: {
      backgroundColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
    },
    iconContainerStyle: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].BRAND_1,
      iconStyle: {
        marginLeft: 15,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_5,
      iconStyle: {
        marginLeft: 15,
      },
    },
    loadingStyle: {},
    loadingProps: {},
  },
  ICON_DEFAULT: {
    containerStyle: {},
    buttonStyle: {
      borderRadius: 5,
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      borderWidth: 2,
      backgroundColor: 'white',
      padding: 2,
      paddingHorizontal: 2,
      height: 50,
      width: 50,
    },
    titleStyle: {},
    disabledStyle: {
      borderColor: DefaultColors[StylingThemes.LIGHT].GRAY_2,
      backgroundColor: 'white',
    },
    disabledTitleStyle: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      opacity: 0.5,
    },
    iconProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginLeft: 15,
      },
    },
    iconDisabledProps: {
      color: DefaultColors[StylingThemes.LIGHT].GRAY_1,
      iconStyle: {
        marginLeft: 15,
        opacity: 0.5,
      },
    },
    iconContainerStyle: {},
    loadingStyle: {},
    loadingProps: {},
  },
};

let TextFieldStyle = {
  containerStyle: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D2DCDE',
    paddingBottom: 0,
    paddingTop: -4,
    height: 72,
  },
  disabledLineWidth: 0,
  lineWidth: 0,

  labelTextStyle: {
    marginLeft: 15,
    paddingBottom: 25,
  },
  titleTextStyle: {
    marginLeft: 5,
  },
  inputContainerPadding: 20,
  inputContainerStyle: {
    paddingHorizontal: 15,
    marginTop: -5,
    paddingTop: 37,
  },
};

function LoyalStyleSheet() {
  let _style = {
    colors: DefaultColors,
    text: DefaultTextStyle,
  };

  this.getTextStyleWithTheme = textTheme => {
    return this.getTextStyle(textTheme.theme, textTheme.variant);
  };
  this.getTextStyle = (theme, variant) => {
    if (typeof _style.text[theme] == 'undefined') {
      return _style.text[StylingThemes.LIGHT].BODY;
    } else if (typeof _style.text[theme][variant] == 'undefined') {
      return _style.text[theme].BODY;
    } else {
      return _style.text[theme][variant];
    }
  };

  this.getStyleForComponent = (component, theme, variant) => {
    // TODO: get expecific component style

    switch (component) {
      case 'text':
        return this.getTextStyle(theme, variant);
      default:
        return {};
    }
  };

  this.setStyles = style => {
    _style = style;
  };
  this.extendStyles = ({ component, theme, style }) => {
    for (var property in style) {
      if (
        style.hasOwnProperty(property) &&
        typeof style[property] == 'number'
      ) {
        var results = [];
        let defaultStyle =
          _style[component.toLowerCase()][theme.toUpperCase()][property] || {};
        if (Array.isArray(defaultStyle)) {
          results = defaultStyle;
        } else {
          results.push(defaultStyle);
        }
        results.push(style[property]);
        _style[component.toLowerCase()][theme.toUpperCase()][
          property
        ] = results;
      }
    }
  };
}

LoyalStyleSheet.extendStyles = style =>
  LoyalStyleSheet.shared.extendStyles(style);

LoyalStyleSheet.getTextStyleWithTheme = textTheme =>
  LoyalStyleSheet.shared.getTextStyleWithTheme(textTheme);

LoyalStyleSheet.getTextStyle = (theme, variant) =>
  LoyalStyleSheet.shared.getTextStyle(theme, variant);

LoyalStyleSheet.getStyleForComponent = (component, theme, variant) =>
  LoyalStyleSheet.shared.getStyleForComponent(component, theme, variant);

LoyalStyleSheet.shared = new LoyalStyleSheet();
/*
LoyalStyleSheet.extendStyles({
    component: "text",
    theme: StylingThemes.LIGHT,
    style: StyleSheet.create({
        HEADLINE:{
            color:"#FF5588"
        }
    })
});*/

export {
  StylingThemes,
  DefaultColors,
  DefaultTextStyle,
  DefaultFontFamilies,
  DefaultFontWeighties,
  LoyalStyleSheet,
  TextFieldStyle,
  TextThemes,
  ButtonThemes,
};
