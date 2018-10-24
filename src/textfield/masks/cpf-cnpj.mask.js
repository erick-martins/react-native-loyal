import BaseMask from './_base.mask';
import CustomMask from './custom.mask';

export const CNPJ_MASK = '99.999.999/9999-99';

export const validateCnpj = cnpj => {
  var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
  var dig1 = new Number();
  var dig2 = new Number();
  var i = 0;

  //var exp = /\.|\-|\//g;
  //cnpj = cnpj.toString().replace(/[^0-9]+/g, "")
  cnpj = cnpj.substring(0, Math.min(13, cnpj.length - 1));
  var digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

  for (i = 0; i < valida.length; i++) {
    dig1 += i > 0 ? cnpj.charAt(i - 1) * valida[i] : 0;
    dig2 += cnpj.charAt(i) * valida[i];
  }
  dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
  dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);

  return dig1 * 10 + dig2 == digito;
};

export const CPF_MASK = '999.999.999-99';

export const validateCPF = cpf => {
  if (cpf == '') {
    return true;
  }

  //cpf = cpf.replace(/[^0-9]+/g, "");
  var isValid = true;
  var sum;
  var rest;
  var i;
  i = 0;
  sum = 0;

  if (
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  ) {
    isValid = false;
  }

  for (i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) {
    rest = 0;
  }

  if (rest != parseInt(cpf.substring(9, 10))) {
    isValid = false;
  }

  sum = 0;

  for (i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) {
    rest = 0;
  }
  if (rest != parseInt(cpf.substring(10, 11))) {
    isValid = false;
  }

  return isValid;
};

var maskOptions = { mask: CPF_MASK };

var currentMask = CPF_MASK;

export const validate = value => {
  return currentMask == CNPJ_MASK ? validateCnpj(value) : validateCPF(value);
};

export default class CpfCnpjMask extends BaseMask {
  static getType() {
    return 'cpf-cnpj';
  }

  getValue(value, settings) {
    value = this.getRawValue(value);
    let length = value.length;
    currentMask = length > 11 ? CNPJ_MASK : CPF_MASK;
    maskOptions = { mask: currentMask };
    //debugger;
    return CustomMask.shared.getValue(value, maskOptions);
  }

  getRawValue(maskedValue, settings) {
    return super.removeNotNumbers(maskedValue);
  }

  validate(value, settings) {
    var isEmpty = (value || '').trim().length === 0;
    if (isEmpty) return value;
    currentMask = this.getRawValue(value).length > 11 ? CNPJ_MASK : CPF_MASK;
    maskOptions = { mask: currentMask };
    return !isEmpty && validate(this.getRawValue(value));
  }

  getMask(value, settings) {
    return currentMask;
  }

  maxChar() {
    return 18;
  }
}
