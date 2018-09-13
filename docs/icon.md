---
id: icon
title: Icon
---

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

