import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './src/reducers/index'
import firebase from 'react-native-firebase'
import Router from './src/Router'
import ReduxThunk from 'redux-thunk'

export default class App extends React.Component {
    componentWillMount(){
    
    }
  render() {

    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk))
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
  }
}
