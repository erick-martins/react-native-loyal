# Icons

![Icon](/react-native-loyal/img/icons.png)

Icons take the name of a [material icon](https://design.google.com/icons/) as a prop. Use the [icon directory](https://oblador.github.io/react-native-vector-icons/) to search for icons

> You can override Material icons with one of the following: [material-community](https://materialdesignicons.com/), [font-awesome](http://fontawesome.io/icons/), [octicon](https://octicons.github.com/), [ionicon](http://ionicons.com/), [foundation](http://zurb.com/playground/foundation-icon-fonts-3), [evilicon](http://evil-icons.io/), [simple-line-icon](http://simplelineicons.com/), [zocial](http://weloveiconfonts.com/), or [entypo](http://www.entypo.com/) by providing a type prop.

> Hint: use **reverse** to make your icon look like a button

### Custom Icon Fonts

Register your own custom icons by calling `registerCustomIconType('customid', customFont)`. Create a custom font by following the [ instructions for creating a custom font here](https://github.com/oblador/react-native-vector-icons#custom-fonts). Also, you can use [Fontello](http://fontello.com/) to generate custom icon fonts.

If you are looking to implement custom icon fonts, please look at our example app [here](https://github.com/react-native-training/react-native-elements-app/blob/master/src/views/buttons_home.js) to see how to use them with React Native Elements.

```js
import { Icon } from 'react-native-elements'

<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />
```

---

### Props


|  Property  |  Type  | Default | Options | Required | Description |
|   :----:   | :----: | :-----: | :-----: | :-----: | :-----: |
|    name    | string |  none   |  | ✓  |
|    type    | string |  material | `material-community, zocial, font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, feather or entypo` | ✕ |
|    size    | number |  26 |  | ✕ |
|    color    | string |  black |  `rgb(), rgba(), #hex`  | ✕ | Color of icon |
|    underlayColor    | string |  icon color |  `rgb(), rgba(), #hex`  | ✕ | underlayColor for press event |
|    reverseColor    | string |  white |  `rgb(), rgba(), #hex`  | ✕ | specify reverse icon color |
|    reverse    | boolean |  false |  `true` or `false`  | ✕ | reverses color scheme |
|    raised    | boolean |  false |  `true` or `false`  | ✕ | adds box shadow to button |
|    iconStyle    | object (style) |  inherited style |   | ✕ | additional styling to icon |
|    containerStyle    | object (style) |  inherited style |   | ✕ | add styling to container holding icon |
|    component    | React Native Component |  View if no onPress method is defined, TouchableHighlight if onPress method is defined |   | ✕ | update React Native Component |
|    onPress    | function |  none |   | ✕ | onPress method for button |
|    onLongPress    | function |  none |   | ✕ | onLongPress method for button |

