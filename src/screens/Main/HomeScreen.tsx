import { useNavigation } from '@react-navigation/native';
import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../../../constants/colors';

const {width, height} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const categories = [
    {
      id: '1',
      name: 'Plays',
      image: require('../../../assets/images/plays.png'),
    },
    {
      id: '2',
      name: 'Pets Show',
      image: require('../../../assets/images/petshow.png'),
    },
    {
      id: '3',
      name: 'Concert',
      image: require('../../../assets/images/concert.png'),
    },
    {
      id: '4',
      name: 'Magician',
      image: require('../../../assets/images/magician.png'),
    },
    {
      id: '5',
      name: 'Food Fest',
      image: require('../../../assets/images/foodfest.png'),
    },
    {
      id: '6',
      name: 'Dance',
      image: require('../../../assets/images/dance.png'),
    },
    {
      id: '7',
      name: 'Premiere',
      image: require('../../../assets/images/premiere.png'),
    },
    {
      id: '8',
      name: 'Sports',
      image: require('../../../assets/images/sports.png'),
    },
  ];

  const popularItems = [
    {
      id: '1',
      name: 'A R Rahman Infinite Love Live Concert',
      image: require('../../../assets/images/arRahman.png'),
    },
    {
      id: '2',
      name: 'Sports Event',
      image: require('../../../assets/images/sportsEvents.png'),
    },
  ];

  const bookingItems = [
    {
      id: '1',
      name: 'Jokes Bunker',
      image: require('../../../assets/images/jokesBunker.png'),
    },
    {
      id: '2',
      name: 'Dance Like a Man',
      image: require('../../../assets/images/danceLike.png'),
    },
  ];

  const renderCategoryItem = ({item}: {item: (typeof categories)[0]}) => (
    <TouchableOpacity key={item.id} style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setIndex] = React.useState(1);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/happening.png')}
          style={styles.headerIcon}
        />
        <TouchableOpacity style={styles.bellIcon}>
          <Image
            source={require('../../../assets/images/bell.png')}
            style={styles.bellImage}
          />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.locationContainer}>
        <Image
          source={require('../../../assets/images/maps.png')}
          style={styles.locationIcon}
        />
        <View style={styles.locationInputCont}>
          <Text style={styles.placeName}>Bangalore</Text>
          <TextInput
            style={styles.locationInput}
            placeholder="#2 KR Layout, Indiranagar"
            placeholderTextColor="#666"
            editable={false}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabButtonActive}>
          <Text style={styles.tabTextActive}>Entertainment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Academic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Volunteering</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.categoryTitle}>Pick your category</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          numColumns={4}
          columnWrapperStyle={styles.categoryRow}
          contentContainerStyle={styles.categoriesContainer}
          scrollEnabled={false}
        />
      </ScrollView>

      <Text style={styles.sectionTitle}>Most Popular</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.popularScroll}>
        <View style={styles.popularContainer}>
          {popularItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.popularItem}
              onPress={() =>
                navigation.navigate('EventDetailsScreen' as never)
              }>
              <Image source={item.image} style={styles.popularImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>Resume your booking</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.bookingScroll}>
        <View style={styles.bookingContainer}>
          {bookingItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.bookingItem}>
              <Image source={item.image} style={styles.bookingImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select your location</Text>

            <View style={styles.permissionRow}>
              <Text style={styles.permissionText}>
                Phone location permission
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#EEE6F9'}}
                thumbColor={true ? Colors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {}}
                value={true}
              />
            </View>

            <View style={styles.locationOption}>
              <Text style={styles.locationOptionText}>Current Location</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={[
                styles.locationContainer,
                {width: width * 0.88, marginHorizontal: width * 0.01},
              ]}>
              <Image
                source={require('../../../assets/images/maps.png')}
                style={styles.locationIcon}
              />
              <View style={styles.locationInputCont}>
                <Text style={styles.placeName}>Bangalore</Text>
                <TextInput
                  style={styles.locationInput}
                  placeholder="#2 KR Layout, Indiranagar"
                  placeholderTextColor="#666"
                  editable={false}
                />
              </View>
              <CheckBox
                containerStyle={styles.radioDot}
                checked={selectedIndex === 0}
                onPress={() => setIndex(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </TouchableOpacity>

            <Text style={styles.recentLocationsTitle}>Recent Locations</Text>
            <TouchableOpacity style={styles.locationRadio}>
              <Image
                source={require('../../../assets/images/maps.png')}
                style={styles.locationOptionIcon}
              />
              <Text style={styles.locationRadioText}>
                Sheikh Sarai, #14 JL Road, Delhi
              </Text>
              <CheckBox
                containerStyle={styles.radioDot}
                checked={selectedIndex === 0}
                onPress={() => setIndex(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.locationRadio}>
              <Image
                source={require('../../../assets/images/maps.png')}
                style={styles.locationOptionIcon}
              />
              <Text style={styles.locationRadioText}>
                Saket, 2nd main, Saket main road
              </Text>
              <CheckBox
                containerStyle={[styles.radioDot, {marginLeft: width * 0.18}]}
                checked={selectedIndex === 0}
                onPress={() => setIndex(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.03,
    paddingBottom: height * 0.02,
  },
  logoText: {
    fontSize: width * 0.08,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  headerIcon: {
    marginLeft: width * 0.2,
    width: width * 0.4,
    height: width * 0.1,

    alignSelf: 'center',
    resizeMode: 'contain',
  },
  bellIcon: {
    position: 'relative',
  },
  bellImage: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: Colors.primary,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: width * 0.04,
    height: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: width * 0.03,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F5FD',
    borderRadius: 10,
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
  },
  locationIcon: {
    width: width * 0.07,
    height: width * 0.07,

    marginRight: width * 0.02,
  },
  locationInput: {
    fontSize: width * 0.03,
    color: '#666',
  },
  locationInputCont: {
    flex: 1,
    flexDirection: 'column',
  },
  placeName: {
    fontSize: width * 0.035,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: width * 0.03,
    marginBottom: height * 0.02,
  },
  tabButtonActive: {
    backgroundColor: '#F9F5FD',
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.05,

    borderColor: Colors.primary,
    borderWidth: 2,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  tabButton: {
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: '#EEE6F9',
  },
  tabTextActive: {
    color: Colors.primary,
    fontSize: width * 0.04,
  },
  tabText: {
    color: Colors.primary,
    fontSize: width * 0.04,
  },
  categoryTitle: {
    fontSize: width * 0.045,
    color: '#333',
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.015,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    paddingHorizontal: width * 0.05,
  },
  categoryRow: {
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  flatListContainer: {
    justifyContent: 'center',
  },
  categoryItem: {
    backgroundColor: '#F9F5FD',
    width: width * 0.22,
    alignItems: 'center',
    marginRight: width * 0.03,
    borderRadius: 10,
  },
  categoryImage: {
    width: width * 0.22,
    height: width * 0.18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  categoryText: {
    fontSize: width * 0.035,
    color: '#333',
    marginTop: height * 0.005,
    marginBottom: height * 0.01,
  },
  sectionTitle: {
    fontSize: width * 0.045,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.015,
  },
  popularScroll: {
    marginHorizontal: width * 0.05,
  },
  popularContainer: {
    flexDirection: 'row',
  },
  popularItem: {
    width: width * 0.7,
    marginRight: width * 0.03,
  },
  popularImage: {
    width: width * 0.7,
    height: height * 0.2,
    borderRadius: 10,
    marginRight: width * 0.7,
    resizeMode: 'cover',
  },
  popularText: {
    fontSize: width * 0.035,
    color: '#333',
    marginTop: height * 0.01,
  },
  bookingScroll: {
    marginHorizontal: width * 0.05,
  },
  bookingContainer: {
    flexDirection: 'row',
  },
  bookingItem: {
    width: width * 0.4,
    marginRight: width * 0.03,
  },
  bookingImage: {
    width: '100%',
    height: height * 0.2,
    borderRadius: 10,
  },
  bookingText: {
    fontSize: width * 0.035,
    color: '#333',
    marginTop: height * 0.01,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: height * 0.015,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: Colors.primary,
  },
  navText: {
    fontSize: width * 0.035,
    color: Colors.primary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    marginTop: height * 0.43,
    backgroundColor: '#fff',

    padding: width * 0.05,
    width: width,
    maxHeight: height * 0.7,
  },
  modalTitle: {
    fontSize: width * 0.05,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  permissionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  permissionText: {
    fontSize: width * 0.04,
    color: '#333',
  },
  locationOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  locationOptionIcon: {
    width: width * 0.05,
    height: width * 0.05,

    marginRight: width * 0.02,
  },
  locationOptionText: {
    fontSize: width * 0.05,
    color: '#333',
  },
  locationRadio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  locationRadioActive: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.01,
    backgroundColor: '#f5f5f5',
    padding: width * 0.03,
    borderRadius: 10,
  },
  radioDot: {
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: width * 0.02,
    marginLeft: width * 0.2,
    color: '#800080',
  },
  radioDotActive: {
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: 10,
    backgroundColor: '#800080',
    marginRight: width * 0.02,
  },
  locationRadioText: {
    fontSize: width * 0.04,
    color: '#333',
  },
  recentLocationsTitle: {
    fontSize: width * 0.045,
    color: '#333',
    marginVertical: height * 0.015,
  },
  confirmButton: {
    width: width * 0.3,
    backgroundColor: '#7E2CCF',
    paddingVertical: height * 0.01,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: height * 0.02,
    marginLeft: width * 0.6,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
