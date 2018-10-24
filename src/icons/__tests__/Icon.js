import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Icon from '../Icon';

import list from '../iconList.json';

describe('Icon Component', () => {
    it('should render without issues', () => {
      const component = shallow(<Icon name="icon_add_30px" />);
  
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('should have onPress event', () => {
        const onPress = jest.fn();
        const component = shallow(<Icon name="icon_add_30px" onPress={onPress} />);
        const touchable = component.childAt(0);
        touchable.simulate('press');
        expect(onPress).toHaveBeenCalledTimes(1);
    });
});
describe('Icons list', () => {
    list.forEach( item =>{
        it('should match snapshot when is '+ item.alias, () => {
            const component = shallow(<Icon name={item.name} />);
        
            expect(component.length).toBe(1);
            expect(toJson(component)).toMatchSnapshot();
        }); 
        it('should have onPress event when is '+ item.alias, () => {
            const onPress = jest.fn();
            const component = shallow(<Icon name={item.name} onPress={onPress}/>);
            const touchable = component.childAt(0);
            touchable.simulate('press');
            expect(onPress).toHaveBeenCalledTimes(1);
        });
    });
});