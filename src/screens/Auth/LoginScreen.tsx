import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../../../constants/colors';

const {width, height} = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    AsyncStorage.setItem('isLoggedIn', 'true');
    navigation.navigate('AuthStack' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/happening.png')}
          style={styles.icon}
        />
      </View>

      <Text style={styles.tagline}>Login now to find whats</Text>

      <Text style={styles.nexttagline}>happening around you</Text>

      <TextInput
        style={styles.input}
        placeholder="Email address or mobile number"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Click on Send OTP"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.loginButton}
         onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.otpButton}>
        <Text style={styles.otpButtonText}>Send OTP</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <Text style={styles.orText}>or</Text>
        <Text style={styles.socialText}>Sign in with other accounts</Text>
        <View style={styles.socialIcons}>
          <Image
            source={require('../../../assets/icons/instagram.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('../../../assets/icons/communication.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('../../../assets/icons/twitter.png')}
            style={styles.socialIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.1,
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.06,
  },
  icon: {
    width: width * 0.5,
    height: width * 0.3,

    marginLeft: width * 0.02,
    resizeMode: 'contain',
  },
  tagline: {
    fontSize: width * 0.045,
    color: '#666',
    textAlign: 'center',
  },
  nexttagline: {
    fontSize: width * 0.045,
    color: '#666',
    textAlign: 'center',
    marginBottom: height * 0.07,
  },
  input: {
    height: height * 0.06,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  otpButton: {
    backgroundColor: 'transparent',
    paddingVertical: height * 0.015,

    marginLeft: width * 0.6,
  },
  otpButtonText: {
    color: Colors.primary,
    fontSize: width * 0.035,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: height * 0.012,
    borderRadius: 30,

    marginTop: height * 0.03,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  socialContainer: {
    alignItems: 'center',
  },
  orText: {
    fontSize: width * 0.035,
    color: '#666',
    marginVertical: height * 0.015,
  },
  socialText: {
    fontSize: width * 0.035,
    color: '#666',
    marginBottom: height * 0.015,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    width: width * 0.08,
    height: width * 0.08,
    marginHorizontal: width * 0.02,
  },
});

export default LoginScreen;
