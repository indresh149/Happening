/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../constants/colors';

const {width, height} = Dimensions.get('window');

const SeatSelectionScreen: React.FC = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
         onPress={() => navigation.goBack()}
         style={styles.backButton}>
          <Image
            source={require('../../../assets/icons/previous.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Select Seats</Text>
      </View>

      <View style={styles.stageContainer}>
        <Text style={styles.stageText}>Stage</Text>
      </View>

      <View style={styles.categoriesContainer}>
        <LinearGradient
          colors={['#ABAAD4', '#59586E']}
          style={styles.categoryBar}>
          <Text style={styles.categoryText}>Platinum Class ₹ 1,480</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#FAC38C', '#947353']}
          style={styles.categoryBar}>
          <Text style={styles.categoryText}>Gold Class ₹ 800</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#DBDBDB', '#757575']}
          style={styles.categoryBar}>
          <Text style={styles.categoryText}>Silver Class ₹ 480</Text>
        </LinearGradient>
      </View>

      <Text style={styles.seatsLayoutHeader}>Seats Layout</Text>
      <View style={styles.seatsLayoutContainer}>
        <View style={styles.seatRow}>
          <View
            style={[styles.seatClassIndicator, {backgroundColor: '#7B1FA2'}]}
          />
          <Text style={styles.seatClassText}>Platinum Class ₹ 1,480 </Text>
          <Text style={styles.seatAvailabilityText}>8 seats left</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.quantityDisplay}>
              <Text style={styles.quantityText}>1</Text>
            </View>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.seatRow}>
          <View
            style={[styles.seatClassIndicator, {backgroundColor: '#FFD700'}]}
          />
          <Text style={styles.seatClassText}>Gold Class ₹ 800 </Text>
          <Text style={styles.seatAvailabilityText}>5 seats left</Text>
          <View style={[styles.quantitySelector, {marginLeft: width * 0.09}]}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.quantityDisplay}>
              <Text style={styles.quantityText}>0</Text>
            </View>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.seatRow}>
          <View
            style={[styles.seatClassIndicator, {backgroundColor: '#C0C0C0'}]}
          />
          <Text style={styles.seatClassText}>Silver Class ₹ 480 </Text>
          <Text style={styles.seatAvailabilityText}>3 seats left</Text>
          <View style={[styles.quantitySelector, {marginLeft: width * 0.08}]}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.quantityDisplay}>
              <Text style={styles.quantityText}>0</Text>
            </View>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <View style={styles.totalTextContainer}>
          <Text style={styles.totalText}>₹ 1,480 for 1 seat</Text>
          <Text style={styles.taxText}>+199 tax & fees</Text>
        </View>
        <TouchableOpacity style={styles.payNowButton}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  backButton: {
    marginRight: width * 0.02,
  },
  backIcon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: '#666',
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
  },
  stageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: height * 0.015,
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  stageText: {
    fontSize: width * 0.04,
    color: '#333',
  },
  categoriesContainer: {
    marginBottom: height * 0.02,
  },
  categoryBar: {
    paddingVertical: height * 0.015,
    borderRadius: 10,
    marginBottom: height * 0.01,
    alignItems: 'center',
  },
  platinumBar: {
    backgroundColor: Colors.primary,
  },
  goldBar: {
    backgroundColor: '#FFD700',
  },
  silverBar: {
    backgroundColor: '#C0C0C0',
  },
  categoryText: {
    fontSize: width * 0.04,
    color: '#fff',
  },
  seatsLayoutHeader: {
    fontSize: width * 0.04,
    color: '#666',
    textAlign: 'center',
    marginBottom: height * 0.015,
  },
  seatsLayoutContainer: {
    marginBottom: height * 0.03,
  },
  seatRow: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: width * 0.03,
    marginBottom: height * 0.015,
  },
  seatClassIndicator: {
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: 5,
    marginRight: width * 0.02,
  },
  seatClassText: {
    fontSize: width * 0.035,
    color: '#333',
  },
  seatAvailabilityText: {
    fontSize: width * 0.035,
    color: '#F28C38',
    marginRight: width * 0.02,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  quantityButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: width * 0.06,
    height: width * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
  },
  quantityDisplay: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: width * 0.08,
    height: width * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: width * 0.035,
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: width * 0.03,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginTop: 'auto',
  },
  totalTextContainer: {
    flex: 1,
  },
  totalText: {
    fontSize: width * 0.04,
    color: Colors.primary,
  },
  taxText: {
    fontSize: width * 0.035,
    color: '#666',
  },
  payNowButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payNowText: {
    fontSize: width * 0.04,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SeatSelectionScreen;
