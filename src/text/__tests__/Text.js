import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from '../Text';

import setupDemoStyle from '../../theme/setupDemoStyle';
setupDemoStyle();

import normalize from '../../helpers/normalizeText';

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

const tests = [
  {
    name:'Headline',
    component:() => <Text className={'headline'} />,
    fontSize:normalize(40),
    fontFamily:DefaultFontFamilies.FEATURED,
    fontWeight:DefaultFontWeighties.BLACK
  },{
    name:'Title',
    component:() => <Text className={'title'} />,
    fontSize: normalize(30),
    fontFamily: DefaultFontFamilies.FEATURED,
    fontWeight: DefaultFontWeighties.BLACK,
  },{
    name:'title2',
    component:() => <Text className={'title2'} />,
    fontSize: normalize(30),
    fontFamily: DefaultFontFamilies.FEATURED,
    fontWeight: DefaultFontWeighties.BOOK,
  },{
    name:'title3',
    component:() => <Text className={'title3'} />,
    fontSize: normalize(20),
    fontFamily: DefaultFontFamilies.FEATURED,
    fontWeight: DefaultFontWeighties.BLACK,
  },{
    name:'body',
    component:() => <Text className={'body'} />,
    fontSize: normalize(13),
    fontFamily: DefaultFontFamilies.DEFAULT,
    fontWeight: DefaultFontWeighties.REGULAR,
  },{
    name:'body bold',
    component:() => <Text className={'body bold'} />,
    fontSize: normalize(13),
    fontFamily: DefaultFontFamilies.DEFAULT,
    fontWeight: DefaultFontWeighties.BLACK,
  },{
    name:'altBody',
    component:() => <Text className={'altBody'} />,
    fontSize: normalize(15),
    fontFamily: DefaultFontFamilies.DEFAULT,
    fontWeight: DefaultFontWeighties.REGULAR,
  },{
    name:'largeBody',
    component:() => <Text className={'largeBody'} />,
    fontSize: normalize(20),
    fontFamily: DefaultFontFamilies.DEFAULT,
    fontWeight: DefaultFontWeighties.REGULAR,
  },{
    name:'subtitle',
    component:() => <Text className={'subtitle'} />,
    fontSize: normalize(10),
    fontFamily: DefaultFontFamilies.DEFAULT,
    fontWeight: DefaultFontWeighties.REGULAR,
  }
];



describe('Text Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Text />);

    //const tree = renderer.create(<Text />).toJSON();
    expect(component).toMatchSnapshot();
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  tests.forEach((testing, idx)=>{
    let testDescription = 'should have font size of '+ testing.fontSize
        +', font weight '+ testing.fontWeight
        +' and font family '+ testing.fontFamily
        +' when '+ testing.name;

    it(testDescription, () => {
      const component = shallow(testing.component());
  
      const style = component.props().style;

      let fontSizeStyle, fontWeightStyle, fontFamilyStyle;
      
      if (style && style.hasOwnProperty('fontSize')) 
          fontSizeStyle = style.fontSize;
      if (style && style.hasOwnProperty('fontWeight')) 
        fontWeightStyle = style.fontWeight;
      if (style && style.hasOwnProperty('fontFamily')) 
        fontFamilyStyle = style.fontFamily;
  
      expect(component).toMatchSnapshot();
      expect(fontSizeStyle).toBe(testing.fontSize);
      expect(fontWeightStyle).toBe(testing.fontWeight);
      expect(fontFamilyStyle).toBe(testing.fontFamily);
    });
  });


});
