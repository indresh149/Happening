import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../constants/colors';

const AccountScreen = () => {
  const navigation = useNavigation();
  const handlLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.navigate('LoginScreen' as never);
  };
  return (
    <View style={styles.container}>
      <Text>Coming Soon</Text>
      <TouchableOpacity
      style={styles.logoutButton}
      onPress={() => {
       handlLogout();
      }}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
  },
});
