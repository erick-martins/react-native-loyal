function ColorsStyle({
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  featured,

  // GRAYS
  gray_1,
  gray_2,
  gray_3,
  gray_4,
  gray_5,

  // SYSTEM
  success,
  secundary,
  warning,
  error,
}) {
  this.brand_1 = brand_1 || '#141C45';
  this.brand_2 = brand_2 || '#263C86';
  this.brand_3 = brand_3 || '#1A77B5';
  this.brand_4 = brand_4 || '#63B2DB';
  this.brand_5 = brand_5 || '#0A0F24';
  this.featured = featured || '#CED242';

  // GRAYS
  this.gray_1 = gray_1 || '#63717A';
  this.gray_2 = gray_2 || '#D2DCDE';
  this.gray_3 = gray_3 || '#EDF4F6';
  this.gray_4 = gray_4 || '#F7FAFB';
  this.gray_5 = gray_5 || '#FFFFFF';

  // SYSTEM
  this.success = success || '#21D48F';
  this.secundary = secundary || '#263C86';
  this.warning = warning || '#FBC979';
  this.error = error || '#FF5758';
}

export default ColorsStyle;
