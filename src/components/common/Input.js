<<<<<<< HEAD
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SCREEN_WIDTH, WHITE } from '../../Variables';
import TextInputMask from 'react-native-text-input-mask';

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
    <View style={[containerStyle,props.cStyle]}>
      <View style={[styles.iconContainer,props.iStyle]}>
        <Icon name={props.iconName} style={iconStyle} size={20} />
      </View>
      <TextInputMask
        mask={props.mask}
        onSubmitEditing={props.unFocus}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        style={[inputStyle, props.style]}
        spellCheck={false}
        placeholderTextColor='#ffffff85'
        autoCorrect={false}
        underlineColorAndroid='transparent'
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
  },
  inputActive: {
    flex: 8,
    color: 'black',
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
    color: WHITE,
  },
  submit: {
    backgroundColor: WHITE,
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitInactive: {
    backgroundColor: '#e5385d50',
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Input };
=======
import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet} from 'react-native'

const Input = props =>  {
    const { inputStyle, labelStyle, containerStyle }  = styles
    const { value, label, onChangeText, placeholder, secureTextEntry } = props
    return(
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          style={inputStyle}
          underlineColorAndroid='transparent'
        />
      </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
      color: '#fff',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      height: 30,
      width: 500,
      borderBottomWidth: 0.4,
      borderRadius: 5,
      borderColor: '#fff',
      flex: 2,
    },
    labelStyle: {
      color: '#fff',
      fontSize: 18,
      flex: 1,
    },
    containerStyle: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
    },
})

export { Input }
>>>>>>> ab7cf74fe0e39500e48a657ede8a5143997bceb2
