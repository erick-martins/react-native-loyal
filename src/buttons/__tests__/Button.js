import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../Button';
import Icons from '../../icons/Icons';


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
    // LARGE
    {
      name:'Large Featured',
      component:(props) => (<Button {...props} title="Button" className="large featured" />),
    },{
      name:'Large Featured and disabled',
      component:(props) => (<Button {...props} title="Button" className="large featured" disabled />),
    },{
      name:'Large Featured with icon',
      component:(props) => (<Button {...props} title="Button" className="large featured" icon={<Icons.Cart />}/>),
    },{
      name:'Large Featured with icon and disabled',
      component:(props) => (<Button {...props} title="Button" className="large featured" icon={<Icons.Cart />} disabled />),
    },
    {
      name:'Large',
      component:(props) => (<Button {...props} title="Button" className="large" />),
    },{
      name:'Large and disabled',
      component:(props) => (<Button {...props} title="Button" className="large" disabled />),
    },{
      name:'Large with icon',
      component:(props) => (<Button {...props} title="Button" className="large" icon={<Icons.Cart />}/>),
    },{
      name:'Large with icon and disabled',
      component:(props) => (<Button {...props} title="Button" className="large" icon={<Icons.Cart />} disabled />),
    },

    // SMALL
    {
      name:'Small Featured',
      component:(props) => (<Button {...props} title="Button" className="small featured" />),
    },{
      name:'Small Featured and disabled',
      component:(props) => (<Button {...props} title="Button" className="small featured" disabled />),
    },{
      name:'Small',
      component:(props) => (<Button {...props} title="Button" className="small" />),
    },{
      name:'Small and disabled',
      component:(props) => (<Button {...props} title="Button" className="small" disabled />),
    },

    // FLAT
    {
        name:'Large Featured',
        component:(props) => (<Button {...props} title="Button" className="flat featured" />),
    },{
        name:'Flat Featured and disabled',
        component:(props) => (<Button {...props} title="Button" className="flat featured" disabled />),
    },{
        name:'Flat Featured with icon',
        component:(props) => (<Button {...props} title="Button" className="flat featured" icon={<Icons.Cart />}/>),
    },{
        name:'Flat Featured with icon and disabled',
        component:(props) => (<Button {...props} title="Button" className="flat featured" icon={<Icons.Cart />} disabled />),
    },
    {
        name:'Flat',
        component:(props) => (<Button {...props} title="Button" className="flat" />),
    },{
        name:'Flat and disabled',
        component:(props) => (<Button {...props} title="Button" className="flat" disabled />),
    },{
        name:'Flat with icon',
        component:(props) => (<Button {...props} title="Button" className="flat" icon={<Icons.Cart />}/>),
    },{
        name:'Flat with icon and disabled',
        component:(props) => (<Button {...props} title="Button" className="flat" icon={<Icons.Cart />} disabled />),
    },

    // LARGE SUCCESS
    {
        name:'Large Featured Success',
        component:(props) => (<Button {...props} title="Button" className="large success featured" />),
      },{
        name:'Large Featured Success and disabled',
        component:(props) => (<Button {...props} title="Button" className="large success featured" disabled />),
      },{
        name:'Large Featured Success with icon',
        component:(props) => (<Button {...props} title="Button" className="large success featured" icon={<Icons.Cart />}/>),
      },{
        name:'Large Featured Success with icon and disabled',
        component:(props) => (<Button {...props} title="Button" className="large success featured" icon={<Icons.Cart />} disabled />),
      },
      {
        name:'Large Success',
        component:(props) => (<Button {...props} title="Button" className="large success" />),
      },{
        name:'Large Success and disabled',
        component:(props) => (<Button {...props} title="Button" className="large success" disabled />),
      },{
        name:'Large Success with icon',
        component:(props) => (<Button {...props} title="Button" className="large success" icon={<Icons.Cart />}/>),
      },{
        name:'Large Success with icon and disabled',
        component:(props) => (<Button {...props} title="Button" className="large success" icon={<Icons.Cart />} disabled />),
      },

      // LARGE WARINING
      {
          name:'Large Featured Warning',
          component:(props) => (<Button {...props} title="Button" className="large warning featured" />),
        },{
          name:'Large Featured Warning and disabled',
          component:(props) => (<Button {...props} title="Button" className="large warning featured" disabled />),
        },{
          name:'Large Featured Warning with icon',
          component:(props) => (<Button {...props} title="Button" className="large warning featured" icon={<Icons.Cart />}/>),
        },{
          name:'Large Featured Warning with icon and disabled',
          component:(props) => (<Button {...props} title="Button" className="large warning featured" icon={<Icons.Cart />} disabled />),
        },
        {
          name:'Large Warning',
          component:(props) => (<Button {...props} title="Button" className="large warning" />),
        },{
          name:'Large Warning and disabled',
          component:(props) => (<Button {...props} title="Button" className="large warning" disabled />),
        },{
          name:'Large Warning with icon',
          component:(props) => (<Button {...props} title="Button" className="large warning" icon={<Icons.Cart />}/>),
        },{
          name:'Large Warning with icon and disabled',
          component:(props) => (<Button {...props} title="Button" className="large warning" icon={<Icons.Cart />} disabled />),
        },

    // LARGE WARINING
    {
        name:'Large Featured Danger',
        component:(props) => (<Button {...props} title="Button" className="large danger featured" />),
        },{
        name:'Large Featured Danger and disabled',
        component:(props) => (<Button {...props} title="Button" className="large danger featured" disabled />),
        },{
        name:'Large Featured Danger with icon',
        component:(props) => (<Button {...props} title="Button" className="large danger featured" icon={<Icons.Cart />}/>),
        },{
        name:'Large Featured Danger with icon and disabled',
        component:(props) => (<Button {...props} title="Button" className="large danger featured" icon={<Icons.Cart />} disabled />),
        },
        {
        name:'Large Danger',
        component:(props) => (<Button {...props} title="Button" className="large danger" />),
        },{
        name:'Large Danger and disabled',
        component:(props) => (<Button {...props} title="Button" className="large danger" disabled />),
        },{
        name:'Large Danger with icon',
        component:(props) => (<Button {...props} title="Button" className="large danger" icon={<Icons.Cart />}/>),
        },{
        name:'Large Danger with icon and disabled',
        component:(props) => (<Button {...props} title="Button" className="large danger" icon={<Icons.Cart />} disabled />),
        },

    // JUST ICON
    {
        name:'Just Icon',
        component:(props) => (<Button {...props} className="justIcon" icon={<Icons.Cloud />} />),
    },{
        name:'Just Icon and disabled',
        component:(props) => (<Button {...props} className="justIcon" icon={<Icons.Cloud />} disabled />),
    },{
        name:'Just Icon Featured',
        component:(props) => (<Button {...props} className="justIcon featured" icon={<Icons.Cloud />} />),
    },{
        name:'Just Icon Featured',
        component:(props) => (<Button {...props} className="justIcon featured" icon={<Icons.Cloud />} disabled />),
    }
];



describe('Button Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Button title="Button Test" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<Button title="Button Test" onPress={onPress}/>);
    const touchable = component.childAt(0);
    touchable.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  tests.forEach( testing =>{

    it('should match snapshot when is '+ testing.name, () => {
      const component = shallow(testing.component({}));
  
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    }); 
    it('should have onPress event when is '+ testing.name, () => {
        const onPress = jest.fn();
        const component = shallow(testing.component({onPress:onPress}));
        const touchable = component.childAt(0);
        touchable.simulate('press');
        expect(onPress).toHaveBeenCalledTimes(1);
      });
  });


});
