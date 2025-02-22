import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Coming Soon</Text>
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
