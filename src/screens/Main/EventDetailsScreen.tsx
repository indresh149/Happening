import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Colors } from '../../../constants/colors';


const {width, height} = Dimensions.get('window');

const EventDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../../assets/images/showDetails.png')}
          style={styles.eventImage}
        />

        <View style={styles.headerOverlay}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/icons/previous.png')}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Image
              source={require('../../../assets/icons/share.png')}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tabsOverlay}>
          <TouchableOpacity style={styles.tabButtonActive}>
            <Text style={styles.tabTextActive}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Crew</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.eventTitle}>The complete AR Rahman Show</Text>

        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={[styles.tagText, {color: Colors.primary}]}>
              💜 157 Interested
            </Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>🎥 Teaser</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>⚡ Fast filling</Text>
          </View>
          <TouchableOpacity style={styles.heartButton}>
            <Image
              source={require('../../../assets/icons/like.png')}
              style={styles.heartIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.rawContainer}>
          <View style={styles.infoRow}>
            <Image
              source={require('../../../assets/icons/sand-clock.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>2h 30m</Text>
          </View>
          <View style={styles.infoRow}>
            <Image
              source={require('../../../assets/icons/user.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>5 years+</Text>
          </View>
          <View style={styles.infoRow}>
            <Image
              source={require('../../../assets/icons/musical-note.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>Bollywood, Retro</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={require('../../../assets/icons/internet.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>Hindi, Tamil</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={require('../../../assets/icons/calendar.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>Sat 26.Oct.2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.priceText}>Price: ₹480 - ₹1580</Text>
        </View>

        <TouchableOpacity style={styles.locationContainer}>
          <Image
            source={require('../../../assets/icons/maps.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText}>
            North Avenue Grounds, Bangalore{' '}
            <Text style={styles.infoIcon}>ℹ️</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.timeSeatsContainer}>
          <Text style={styles.timeText}>7:00 pm</Text>
          <Text style={styles.seatsText}>16 seats left</Text>
        </View>

        <View style={styles.amenitiesContainer}>
          <Image
            source={require('../../../assets/icons/parking.png')}
            style={styles.amenityIcon}
          />
          <Image
            source={require('../../../assets/icons/toilet.png')}
            style={styles.amenityIcon}
          />
          <Image
            source={require('../../../assets/icons/restaurant.png')}
            style={styles.amenityIcon}
          />
          <Image
            source={require('../../../assets/icons/info.png')}
            style={styles.amenityIcon}
          />
          <Text style={styles.amenityText}>4kms nearby</Text>
        </View>

        <Text style={styles.sectionTitle}>Policies & Rules</Text>
        <View style={styles.policyList}>
          <Text style={styles.policyText}>• Follow organiser guidelines</Text>
          <Text style={styles.policyText}>
            • Drugs, smoke and alcohol consumption prohibited
          </Text>
          <Text style={styles.policyText}>
            • Kids below 5 years not recommended
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Offers for you</Text>
        <View style={styles.offerList}>
          <Text style={styles.offerText}>
            • Paytm 5% off for min value of ₹1500
          </Text>
          <Text style={styles.offerText}>
            • Use HSBC CC for 10% discount on any booking
          </Text>
        </View>

        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('SeatSelectionScreen' as never)}>
          <Text style={styles.proceedButtonText}>
            Select time slot to proceed
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    height: height * 0.35,
  },
  eventImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.03,
  },
  backButton: {
    padding: width * 0.02,
    backgroundColor: '#e6e6fa',
    borderRadius: 20,
  },
  shareButton: {
    padding: width * 0.02,
    backgroundColor: '#e6e6fa',
    borderRadius: 20,
  },
  headerIcon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: '#666',
  },
  tabsOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: height * 0.01,
  },
  tabButtonActive: {
    backgroundColor: '#e6e6fa',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    borderRadius: 10,
    marginHorizontal: width * 0.02,
  },
  tabButton: {
    backgroundColor: '#fff',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    borderRadius: 10,
    marginHorizontal: width * 0.02,
  },
  tabTextActive: {
    color: Colors.primary,
    fontSize: width * 0.04,
  },
  tabText: {
    color: '#666',
    fontSize: width * 0.04,
  },
  detailsContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05,
  },
  eventTitle: {
    fontSize: width * 0.06,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: height * 0.015,
    marginTop: height * 0.02,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  tag: {
    backgroundColor: '#f5f5f5',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    borderRadius: 10,
    marginRight: width * 0.02,
  },
  tagText: {
    fontSize: width * 0.035,
    color: '#666',
  },
  heartButton: {
    marginLeft: width * 0.01,
  },
  heartIcon: {
    width: width * 0.05,
    height: width * 0.05,
    tintColor: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  rawContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: width * 0.03,
    marginVertical: height * 0.01,
  },
  infoIcon: {
    width: width * 0.04,
    height: width * 0.04,
    tintColor: '#666',
    marginRight: width * 0.02,
  },
  infoText: {
    fontSize: width * 0.04,
    color: '#666',
  },
  priceText: {
    fontSize: width * 0.04,
    color: '#666',
    marginVertical: height * 0.01,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.03,
    borderRadius: 10,
    marginVertical: height * 0.015,
  },
  locationIcon: {
    width: width * 0.04,
    height: width * 0.04,
    tintColor: Colors.primary,
    marginRight: width * 0.02,
  },
  locationText: {
    fontSize: width * 0.04,
    color: '#666',
  },
  timeSeatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.015,
  },
  timeText: {
    fontSize: width * 0.04,
    color: '#333',
  },
  seatsText: {
    fontSize: width * 0.04,
    color: '#ff8c00',
  },
  amenitiesContainer: {
    gap: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.015,
  },
  amenityIcon: {
    width: width * 0.04,
    height: width * 0.04,
    tintColor: '#666',
    marginRight: width * 0.01,
  },
  amenityText: {
    fontSize: width * 0.035,
    color: '#666',
    marginLeft: width * 0.02,
  },
  sectionTitle: {
    fontSize: width * 0.045,
    color: '#333',
    fontWeight: 'bold',
    marginVertical: height * 0.015,
  },
  policyList: {
    marginVertical: height * 0.01,
  },
  policyText: {
    fontSize: width * 0.04,
    color: '#666',
    marginVertical: height * 0.005,
  },
  offerList: {
    marginVertical: height * 0.01,
  },
  offerText: {
    fontSize: width * 0.04,
    color: '#666',
    marginVertical: height * 0.005,
  },
  proceedButton: {
    backgroundColor: '#e6e6fa',
    paddingVertical: height * 0.02,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  proceedButtonText: {
    fontSize: width * 0.04,
    color: Colors.primary,
  },
});

export default EventDetailsScreen;
