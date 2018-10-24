import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Icons from '../icons/Icons';
import SearchBar from '../searchbar/SearchBar';

import TextField from '../textfield/field';

export default class TextFieldsTab extends React.Component {
  state = {
    normalInput: '',
    disabledInput: '',
    disabledInput2: 'With Value',
    requiredInput: '',
    iconInput: '',
    prefixInput: '134,85',
    counterInput: '',
    counterLimitedInput: '',
    descriptionInput: 'With description',
    successInput: 'Right Value',
    errorInput: 'Wrong Value',
    multilineInput: 'Line1\nline2\nline3',

    cpfCnpj: '',
    creditCard: '',
    cellphone: '',
    datetime: '',
    money: '',

    phoneFeedBack: { value: '' },
  };

  onContentSizeChange(event) {
    let { width, height } = event.nativeEvent.contentSize;
    //console.log('event.nativeEvent', width, height);
    //let { height } = event.nativeEvent.contentSize;
    this.multilineInputView &&
      this.multilineInputView.setNativeProps({ style: { height: height } });
  }

  render() {
    let {
      normalInput,
      disabledInput,
      disabledInput2,
      requiredInput,
      descriptionInput,
      successInput,
      errorInput,
      iconInput,
      prefixInput,
      counterInput,
      counterLimitedInput,
      multilineInput,

      cpfCnpj,
      creditCard,
      cellphone,
      datetime,
      money,

      phoneFeedBack,
    } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.itemContainer}>
            <TextField
              label="Normal input"
              value={normalInput}
              onChangeText={normalInput => this.setState({ normalInput })}
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Disabled Input"
              value={disabledInput}
              onChangeText={disabledInput => this.setState({ disabledInput })}
              disabled
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Disabled Input"
              value={disabledInput2}
              onChangeText={disabledInput2 => this.setState({ disabledInput2 })}
              disabled
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Required Input"
              value={requiredInput}
              onChangeText={requiredInput => this.setState({ requiredInput })}
              required
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Input"
              value={descriptionInput}
              onChangeText={descriptionInput =>
                this.setState({ descriptionInput })
              }
              description="Description goes here"
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Icon Input"
              value={iconInput}
              onChangeText={iconInput => this.setState({ iconInput })}
              icon={<Icons.Presentation />}
              iconColor="#f3a044"
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Prefixed Input"
              value={prefixInput}
              onChangeText={prefixInput => this.setState({ prefixInput })}
              prefix="R$"
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Limited Char Number Input"
              value={counterLimitedInput}
              onChangeText={counterLimitedInput =>
                this.setState({ counterLimitedInput })
              }
              title="Description goes here"
              maxChar={10}
              limitToMaxChar
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Limited Char Number Input with error"
              value={counterInput}
              onChangeText={counterInput => this.setState({ counterInput })}
              title="Description goes here"
              maxChar={10}
              showCounter
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Input with"
              value={successInput}
              onChangeText={successInput => this.setState({ successInput })}
              success="Success Information"
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              label="Input with"
              value={errorInput}
              onChangeText={errorInput => this.setState({ errorInput })}
              error="Error Information"
            />
          </View>

          <View style={styles.itemContainer}>
            <TextField
              label="Multiline input"
              value={multilineInput}
              onChangeText={multilineInput => this.setState({ multilineInput })}
              multiline
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              ref={ref => (this._cpfCnpj = ref)}
              label="Masked input"
              value={cpfCnpj}
              type={'cpf-cnpj'}
              placeholder={'CPF/CNPJ'}
              onChangeText={cpfCnpj => {
                this.setState({ cpfCnpj });
                // //console.log(this._cpfCnpj.getElement())
                // //console.log(this._cpfCnpj.isValid())
                // //console.log(this._cpfCnpj.getRawValue())
              }}
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              ref={ref => (this._datetime = ref)}
              label="Masked input"
              value={datetime}
              type={'datetime'}
              placeholder={'Date Time'}
              onChangeText={datetime => {
                this.setState({ datetime });
              }}
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              ref={ref => (this._creditCard = ref)}
              label="Masked input"
              value={creditCard}
              type={'credit-card'}
              placeholder={'Credit Card'}
              onChangeText={creditCard => {
                this.setState({ creditCard });
              }}
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              ref={ref => (this._cellphone = ref)}
              label="Masked input"
              value={cellphone}
              type={'cellphone'}
              placeholder={'Phone / Cellphone'}
              options={{ format: '99.999.999/9999-99' }}
              onChangeText={cellphone => {
                this.setState({ cellphone });
              }}
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              ref={ref => (this._money = ref)}
              label="Masked input"
              value={money}
              type={'money'}
              prefix={'R$'}
              placeholder={'1.000.000,00'}
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: '',
                suffixUnit: '',
                zeroCents: false,
              }}
              onChangeText={money => {
                this.setState({ money });
              }}
            />
          </View>
          <View style={styles.itemContainer}>
            <TextField
              ref={ref => (this._phoneWithValidation = ref)}
              label="Masked Phone with Feedback"
              type={'cellphone'}
              placeholder={'(99) 99999-9999'}
              onChangeText={value => {
                this.setState({
                  phoneFeedBack: { ...this.state.phoneFeedBack, value },
                });
              }}
              onFocus={() => {
                this.setState({
                  phoneFeedBack: {
                    ...this.state.phoneFeedBack,
                    error: undefined,
                    success: undefined,
                  },
                });
              }}
              onBlur={() => {
                var validation = {};
                let isValid = this._phoneWithValidation.isValid();
                //debugger;
                switch (isValid) {
                  case true:
                    validation = {
                      success: 'Valid phone number',
                      error: undefined,
                    };
                    break;
                  case false:
                    validation = {
                      success: undefined,
                      error: 'Please, enter a valid phone number',
                    };
                    break;
                  default:
                    validation = { success: undefined, error: undefined };
                }
                this.setState({
                  phoneFeedBack: { ...this.state.phoneFeedBack, ...validation },
                });
              }}
              {...phoneFeedBack}
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: '100%',
  },
  contentContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    width: '100%',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 20,
  },
});
