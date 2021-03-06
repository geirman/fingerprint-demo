import React, { Component } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Video } from 'expo';

import FingerprintWaitingNotification from '../components/FingerprintWaitingNotification';
import colors from '../constants/Colors';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.login}
          behavior="padding"
          keyboardVerticalOffset={150}
        >
          <Text style={styles.header}>Login</Text>
          <TextInput
            ref="email"
            placeholder="Email"
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={evt => this.refs.password.focus()}
            underlineColorAndroid="transparent"
          />
          <TextInput
            ref="password"
            placeholder="Password"
            secureTextEntry
            style={[styles.input, { marginBottom: 15 }]}
            returnKeyType="done"
            underlineColorAndroid="transparent"
          />
          <Button
            title={this.props.submitting ? 'Submitting...' : 'Submit'}
            color={colors.login.buttonColor}
            disabled={this.props.submiting}
            onPress={this.props.handleLogin}
          />
          <FingerprintWaitingNotification
            onFingerprintSuccess={this.props.handleLogin}
            waitTextColor={colors.login.buttonColor}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.login.background
  },
  header: {
    fontSize: 40,
    backgroundColor: 'transparent',
    color: '#FFF'
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginVertical: 10,
    paddingLeft: 15,
    fontSize: 20,
    color: colors.login.buttonColor
  },
  login: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.login.background
  },
  button: {
    height: 50
  }
});

export default LoginScreen;
