import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/root-reducer'

import Screen1 from './screens/Screen1'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Screen1 />
    </Provider>
  )
}