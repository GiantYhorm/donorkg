import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SCREEN_WIDTH, GREEN } from '../../Variables';

const Input = (props) => {
  let containerStyle = props.active ? styles.containerActive : styles.containerInactive;
  let inputStyle = props.active ? styles.inputActive : styles.inputInactive;
  let iconStyle = props.active ? styles.iconActive : styles.iconInactive;
  let submitStyle = props.active ? styles.submit : styles.submitInactive;

  const showButton = (submit) => {
    if (submit) {
      if (props.loading) {
        return (
          <TouchableOpacity onPress={submit} style={submitStyle}>
            <ActivityIndicator size='small' color='#fff' />
          </TouchableOpacity>
        );
      }
      return (
        <TouchableOpacity onPress={submit} style={submitStyle}>
          <Icon name='arrow-right' style={{ color: '#fff' }} size={20} />
        </TouchableOpacity>
      );
    }
    return <View style={{ width: 45 }}/>;
  };

  return (
    <View style={containerStyle}>
      <View style={styles.iconContainer}>
        <Icon name={props.iconName} style={iconStyle} size={20} />
      </View>
      <TextInput
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        style={[inputStyle, props.style]}
        spellCheck={false}
        autoCorrect={false}
        underlineColorAndroid='transparent'
        placeholderTextColor='#ffffff80'
        onFocus={props.onFocus}
        keyboardType={props.keyboardType}
      />
      {showButton(props.onLoginSubmit)}
    </View>
  );
};

const styles = StyleSheet.create({
  containerInactive: {
    backgroundColor: '#ffffff50',
    borderRadius: 50 / 2,
    height: 50,
    width: SCREEN_WIDTH * 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  containerActive: {
    backgroundColor: '#ffffff',
    borderRadius: 50 / 2,
    height: 50,
    width: SCREEN_WIDTH * 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  inputInactive: {
    flex: 8,
    color: '#ffffff',
    textAlign: 'center',
  },
  inputActive: {
    flex: 8,
    color: GREEN,
    textAlign: 'center',
  },
  iconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInactive: {
    color: '#ffffff80',
  },
  iconActive: {
    color: GREEN,
  },
  submit: {
    backgroundColor: GREEN,
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitInactive: {
    backgroundColor: '#2ad2ac50',
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Input };
