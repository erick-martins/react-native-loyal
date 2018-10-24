import React from 'react';
import Theme from '../theme';
import ColorsStyle from '../theme/ColorsStyle';
import normalize from '../helpers/normalizeText';

import Icons from '../icons/Icons';

function fontSizePerc(fontSize, perc) {
  return (fontSize / 100) * (perc / 5);
}

let Constants = {
  ICON_MARGIN_RIGHT: 5,
};
const setupDemoStyle = () => {
  let theme = new Theme('webpremios');

  const colorsLight = new ColorsStyle({
    brand_1: '#141c45',
    brand_2: '#263c86',
    brand_3: '#1a77b5',
    brand_4: '#63b2db',
    brand_5: '#0a0f24',
    featured: '#ced242',

    // grays
    gray_1: '#63717a',
    gray_2: '#d2dcde',
    gray_3: '#edf4f6',
    gray_4: '#f7fafb',
    gray_5: '#ffffff',

    // system
    success: '#21d48f',
    secundary: '#263c86',
    warning: '#fbc979',
    error: '#ff5758',
  });
  const colorsDark = new ColorsStyle({
    brand_1: '#141c45',
    brand_2: '#263c86',
    brand_3: '#1a77b5',
    brand_4: '#63b2db',
    brand_5: '#0a0f24',
    featured: '#ced242',

    // grays
    gray_1: '#63717a',
    gray_2: '#d2dcde',
    gray_3: '#edf4f6',
    gray_4: '#f7fafb',
    gray_5: '#ffffff',

    // system
    success: '#21d48f',
    secundary: '#263c86',
    warning: '#fbc979',
    error: '#ff5758',
  });
  theme.setColors(colorsLight, colorsDark);

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

  // CREATE DEFAULT THEME
  theme
    .createComponentTheme('Text')
    .light(
      {
        fontSize: 20,
        fontFamily: DefaultFontFamilies.DEFAULT,
        fontWeight: DefaultFontWeighties.REGULAR,
        color: colorsLight.gray_1,
      },
      {
        featured: {
          color: colorsLight.brand_4,
        },
        success: {
          color: colorsLight.success,
        },
        warning: {
          color: colorsLight.warning,
        },
        danger: {
          color: colorsLight.error,
        },
        headline: {
          fontSize: normalize(40),
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BLACK,
          color: colorsLight.brand_4,
          lineHeight: normalize(51),
        },
        title: {
          fontSize: normalize(30),
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BLACK,
          color: colorsLight.brand_4,
          lineHeight: normalize(38),
        },
        title2: {
          fontSize: normalize(30),
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BOOK,
          color: colorsLight.brand_4,
          lineHeight: normalize(34),
        },
        title3: {
          fontSize: normalize(20),
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BLACK,
          color: colorsLight.brand_4,
          lineHeight: normalize(22),
        },
        body: {
          fontSize: normalize(13),
          lineHeight: normalize(16),
          letterSpacing: fontSizePerc(13, 40),
        },
        altBody: {
          fontSize: normalize(15),
          lineHeight: normalize(18),
          letterSpacing: fontSizePerc(15, 40),
        },
        largeBody: {
          fontSize: normalize(20),
          lineHeight: normalize(25),
          letterSpacing: fontSizePerc(20, 40),
        },
        subtitle: {
          fontSize: normalize(10),
          lineHeight: normalize(13),
          letterSpacing: fontSizePerc(10, 40),
        },
        bold: {
          fontWeight: DefaultFontWeighties.BLACK,
        },
      }
    )
    .dark(
      {
        fontSize: 20,
        fontFamily: DefaultFontFamilies.DEFAULT,
        fontWeight: DefaultFontWeighties.REGULAR,
        color: colorsLight.gray_5,
      },
      {
        featured: {
          color: colorsLight.featured,
        },
        success: {
          color: colorsLight.success,
        },
        warning: {
          color: colorsLight.warning,
        },
        danger: {
          color: colorsLight.error,
        },
        headline: {
          fontSize: normalize(40),
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BLACK,
          color: colorsLight.featured,
          lineHeight: normalize(51),
        },
        title: {
          fontSize: normalize(30),
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BLACK,
          lineHeight: normalize(38),
        },
        title2: {
          fontSize: normalize(30),
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BOOK,
          lineHeight: normalize(34),
        },
        title3: {
          fontSize: normalize(20),
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BLACK,
          color: colorsLight.featured,
          lineHeight: normalize(22),
        },
        body: {
          fontSize: normalize(13),
          lineHeight: normalize(16),
          letterSpacing: fontSizePerc(13, 40),
        },
        altBody: {
          fontSize: normalize(15),
          lineHeight: normalize(18),
          letterSpacing: fontSizePerc(15, 40),
        },
        largeBody: {
          fontSize: normalize(20),
          lineHeight: normalize(25),
          letterSpacing: fontSizePerc(20, 40),
        },
        subtitle: {
          fontSize: normalize(10),
          lineHeight: normalize(13),
          letterSpacing: fontSizePerc(10, 40),
        },
        bold: {
          fontWeight: DefaultFontWeighties.BLACK,
        },
      }
    )
    .onExtractFromProps((args, props) => args)
    .onGetStyle((args, props, style) => style)
    .overrideIds({
      TextHeadline_teste: {
        fontSize: 80,
      },
    })
    .commit();

  // COMPONENT BUTTON
  theme
    .createComponentTheme('Button')
    .light(
      {
        containerStyle: {},
        buttonStyle: {
          borderRadius: 10,
          borderColor: colorsLight.gray_2,
          borderWidth: 2,
          backgroundColor: 'white',
          paddingVertical: 16,
          paddingHorizontal: 26,
          height: 70,
        },
        titleStyle: {
          fontSize: 15,
          color: colorsLight.gray_1,
          fontFamily: DefaultFontFamilies.FEATURED,
          fontWeight: DefaultFontWeighties.BLACK,
        },
        disabledStyle: {
          borderColor: colorsLight.gray_2,
          backgroundColor: 'white',
        },
        disabledTitleStyle: {
          color: colorsLight.gray_1,
          opacity: 0.5,
        },
        iconProps: {
          color: colorsLight.gray_1,
          iconStyle: {
            marginRight: Constants.ICON_MARGIN_RIGHT,
          },
        },
        iconDisabledProps: {
          color: colorsLight.gray_1,
          iconStyle: {
            marginRight: Constants.ICON_MARGIN_RIGHT,
            opacity: 0.5,
          },
        },
        loadingStyle: {},
        loadingProps: {},
      },
      {
        large: {
          buttonStyle: {
            borderRadius: 45,
            paddingVertical: 16,
            paddingHorizontal: 26,
            height: 70,
          },
          titleStyle: {
            fontSize: 15,
          },
        },
        small: {
          buttonStyle: {
            borderRadius: 45,
            paddingVertical: 6,
            paddingHorizontal: 26,
            height: 50,
          },
          titleStyle: {
            fontSize: 15,
          },
        },
        flat: {
          buttonStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0,
            paddingVertical: 16,
            paddingHorizontal: 26,
          },
          titleStyle: {
            color: colorsLight.gray_1,
          },
          iconProps: {
            color: colorsLight.gray_1,
          },
        },
        flat_featured: {
          buttonStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0,
            paddingVertical: 16,
            paddingHorizontal: 26,
          },
          titleStyle: {
            color: colorsLight.brand_4,
          },
          iconProps: {
            color: colorsLight.brand_4,
          },

          disabledStyle: {
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
          disabledTitleStyle: {
            color: colorsLight.brand_4,
            opacity: 0.5,
          },
          iconDisabledProps: {
            color: colorsLight.brand_4,
            iconStyle: {
              opacity: 0.5,
            },
          },
        },
        featured: {
          buttonStyle: {
            borderColor: 'transparent',
            backgroundColor: colorsLight.featured,
          },
          titleStyle: {
            color: colorsLight.brand_1,
          },
          iconProps: {
            color: colorsLight.brand_1,
          },
          disabledStyle: {
            backgroundColor: colorsLight.gray_2,
            opacity: 1,
          },
          disabledTitleStyle: {
            color: colorsLight.gray_5,
          },
          iconContainerStyle: {
            color: colorsLight.brand_1,
          },
          iconDisabledProps: {
            color: colorsLight.gray_5,
            iconStyle: {
              marginRight: Constants.ICON_MARGIN_RIGHT,
              opacity: 1,
            },
          },
        },
        success: {
          buttonStyle: {
            borderColor: colorsLight.success,
          },
          titleStyle: {
            color: colorsLight.success,
          },
          iconProps: {
            color: colorsLight.success,
          },
        },
        success_featured: {
          buttonStyle: {
            backgroundColor: colorsLight.success,
            borderColor: 'transparent',
          },
          titleStyle: {
            color: colorsLight.gray_5,
          },
          iconProps: {
            color: colorsLight.gray_5,
          },
        },
        warning: {
          buttonStyle: {
            borderColor: colorsLight.warning,
          },
          titleStyle: {
            color: colorsLight.warning,
          },
          iconProps: {
            color: colorsLight.warning,
          },
        },
        warning_featured: {
          buttonStyle: {
            backgroundColor: colorsLight.warning,
            borderColor: 'transparent',
          },
          titleStyle: {
            color: colorsLight.gray_5,
          },
          iconProps: {
            color: colorsLight.gray_5,
          },
        },
        danger: {
          buttonStyle: {
            borderColor: colorsLight.error,
          },
          titleStyle: {
            color: colorsLight.error,
          },
          iconProps: {
            color: colorsLight.error,
          },
        },
        danger_featured: {
          buttonStyle: {
            backgroundColor: colorsLight.error,
            borderColor: 'transparent',
          },
          titleStyle: {
            color: colorsLight.gray_5,
          },
          iconProps: {
            color: colorsLight.gray_5,
          },
        },
        featured_disabled: {
          disabledTitleStyle: {
            opacity: 1,
          },
          iconDisabledProps: {
            color: colorsLight.gray_5,
            opacity: 1,
          },
        },
        withIconLeft: {},
        withIconRight: {},
        justIcon: {
          buttonStyle: {
            borderRadius: 5,
            paddingVertical: 0,
            paddingHorizontal: 6,
            height: 50,
            width: 50,
          },
          iconProps: {
            iconStyle: {
              height: 30,
              width: 30,
              marginTop: 5,
              marginLeft: 27,
            },
          },
          iconDisabledProps: {
            iconStyle: {
              height: 30,
              width: 30,
              marginTop: 5,
              marginLeft: 27,
              opacity: 0.5,
            },
          },
        },
        justIcon_featured: {
          iconProps: {
            iconStyle: {},
          },
          iconDisabledProps: {
            iconStyle: {},
          },
        },
      }
    )
    .onExtractFromProps((args, props) => {
      //debugger;
      args.hasProp('icon').push('withIconLeft');
      args.hasProp('iconRight').push('withIconRight');

      args.findAll(['featured', 'flat']).replace('flat_featured');
      args.findAll(['featured', 'success']).replace('success_featured');
      args.findAll(['featured', 'warning']).replace('warning_featured');
      args.findAll(['featured', 'danger']).replace('danger_featured');

      args.findAll(['featured', 'flat']).else(() => {
        args.hasProp('disabled').do(() => {
          args.has('featured').push('featured_disabled');
        });
      });
      args.findAll(['justIcon', 'featured']).push('justIcon_featured');
      return args;
    })
    .onGetStyle((args, props, style) => style)
    .overrideIds({})
    .commit();

  theme
    .createComponentTheme('TextField')
    .light({
      underlineColorAndroid: 'transparent',
      disableFullscreenUI: true,
      autoCapitalize: 'sentences',
      editable: true,

      animationDuration: 225,

      fontSize: 17,
      titleFontSize: 14,
      labelFontSize: 14,
      labelHeight: 32,
      labelPadding: 0,
      //inputContainerPadding: 8,

      tintColor: colorsLight.brand_4,
      textColor: colorsLight.gray_1,
      baseColor: colorsLight.gray_1,
      lineColor: colorsLight.gray_2,

      errorColor: colorsLight.error,
      successColor: colorsLight.success,

      //lineWidth: StyleSheet.hairlineWidth,
      activeLineWidth: 2,

      disabled: false,
      disabledLineType: 'dotted',
      //disabledLineWidth: 1,

      containerStyle: {
        // width:'100%',
        // backgroundColor:'white',
        borderWidth: 0,
        // borderColor: colorsLight.GRAY_2,
        // paddingBottom:0,
        // paddingTop:-6,
        // height:73
      },
      disabledLineWidth: 0,
      lineWidth: 1,

      labelTextStyle: {
        marginLeft: 15,
        paddingBottom: 25,
        top: -6,
      },
      titleTextStyle: {
        marginLeft: 5,
        fontFamily: DefaultFontFamilies.DEFAULT,
        fontWeight: DefaultFontWeighties.REGULAR,
        fontSize: 13,
      },
      inputContainerPadding: 20,
      inputContainerStyle: {
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: colorsLight.gray_2,
        paddingBottom: 0,
        paddingTop: 34,
        paddingHorizontal: 15,
      },
      successIcon: <Icons.CheckAlt />,
      errorIcon: <Icons.CheckAlt />,
      requiredChar: '*',
    })
    .onExtractFromProps((args, props) => args)
    .onGetStyle((args, props, style) => style)
    .overrideIds({
      TextHeadline_teste: {
        fontSize: 80,
      },
    })
    .commit();
  /**/
  theme.apply();

  return theme;
};

export default setupDemoStyle;
