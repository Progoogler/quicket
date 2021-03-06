import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: 'green',
  },
  text: {
    fontSize: 18,
    color: 'green',
  },
});



class Title extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this._getTimeLimitResponse(this.props.limit)} Timer Queue </Text>
      </View>
    );
  }

  _getTimeLimitResponse(length) {
    if (length < 1) {
      length = length * 60;
      return `${length}  Minute`;
    } else {
      return `${length}  Hour`;
    }
  }

}

export default Title;
