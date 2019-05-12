import React from 'react';
import {
  View
} from 'react-native';
import LoginForm from "./common/LoginForm";

export default class App extends React.Component {
  render() {
    return (
      <View
        style = {{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <LoginForm />
      </View>
    );
  }
}

