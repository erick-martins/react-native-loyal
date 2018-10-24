import * as Masks from './masks';

var maskKeys = Object.keys(Masks);

export default class MaskResolver {
  static resolve(type) {
    ///debugger;
    let maskKey = maskKeys.filter(m => {
      var handler = Masks[m];
      return handler && handler.getType && handler.getType() === type;
    })[0];

    let handler = Masks[maskKey];

    if (!handler) {
      return null;
      //throw new Error('Mask type not supported.');
    }

    return new handler();
  }
}
