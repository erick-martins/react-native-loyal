import Styles from './index';

function TypographyStyle({
  global: _global,
  size: { headline, title, title2, title3, body, altBody, largeBody, subtitle },
  variants: { default: variantDefault, featured, success, error, warning },
  weight: { thin, regular, bold, black },
  specific = {},
}) {
  this.global = _global;
  this.size = {
    headline: headline,
    title: title,
    title2: title2,
    title3: title3,
    body: body,
    altBody: altBody,
    largeBody: largeBody,
    subtitle: subtitle,
  };
  this.variants = {
    default: variantDefault,
    featured: featured,
    success: success,
    error: error,
    warning: warning,
  };
  this.weight = weight;
  this.specific = specific;
}

TypographyStyle.generateWeights = ({ thin, regular, bold, black }) => ({
  thin: { fontWeight: thin || '100' },
  regular: { fontWeight: regular || '300' },
  bold: { fontWeight: bold || '700' },
  black: { fontWeight: black || '900' },
});
TypographyStyle.generateSizes = ({
  headline,
  title,
  title2,
  title3,
  body,
  altBody,
  largeBody,
  subtitle,
}) => ({
  headline: { ...headline },
  title: { ...title },
  title2: { ...title2 },
  title3: { ...title3 },
  body: { ...body },
  altBody: { ...altBody },
  largeBody: { ...largeBody },
  subtitle: { ...subtitle },
});
TypographyStyle.generateVariants = ({
  default: defaultVariant,
  featured,
  success,
  error,
  warning,
}) => ({
  default: { ...defaultVariant },
  featured: { ...featured },
  success: { ...success },
  error: { ...error },
  warning: { ...warning },
});

TypographyStyle.setupDefault = () => {
  let lightColors = Styles.getColorSet('light');

  let lightTypography = new TypographyStyle({
    global: {},
    size: TypographyStyle.generateSizes({
      headline: {},
      title: {},
      title2: {},
      title3: {},
      body: {},
      altBody: {},
      largeBody: {},
      subtitle: {},
    }),
    variants: TypographyStyle.generateVariants({
      default: { color: lightColors.brand_1 },
      featured: { color: lightColors.brand_1 },
      success: { color: lightColors.brand_1 },
      error: { color: lightColors.brand_1 },
      warning: { color: lightColors.brand_1 },
    }),
    weight: TypographyStyle.generateWeights({
      thin: '100',
      regular: '300',
      bold: '700',
      black: '900',
    }),
    specific: {},
  });

  let darkColors = Styles.getColorSet('dark');

  let darkTypography = new TypographyStyle({
    global: {},
    size: TypographyStyle.generateSizes({
      headline: {},
      title: {},
      title2: {},
      title3: {},
      body: {},
      altBody: {},
      largeBody: {},
      subtitle: {},
    }),
    variants: TypographyStyle.generateVariants({
      default: { color: darkColors.brand_1 },
      featured: { color: darkColors.brand_1 },
      success: { color: darkColors.brand_1 },
      error: { color: darkColors.brand_1 },
      warning: { color: darkColors.brand_1 },
    }),
    weight: TypographyStyle.generateWeights({
      thin: '100',
      regular: '300',
      bold: '700',
      black: '900',
    }),
    specific: {},
  });

  const globalStyle = {
    fontSize: 16,
  };

  Styles.setTypography(globalStyle, lightTypography, darkTypography);
};

export default TypographyStyle;
