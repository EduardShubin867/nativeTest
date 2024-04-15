import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccountPage = () => {
  return (
    <View style={styles.main}>
      <Text>Account Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountPage;
