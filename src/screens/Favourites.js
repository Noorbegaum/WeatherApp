import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import NoFav from '../components/NoFav';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CityList from '../components/CityList';

const image = require('../assets/images/background.png');

const Favourites = ({navigation}) => {

    const handleBack=()=>{
        navigation.goBack('HomeScreen')
    }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.safeView}>
          {/*  */}
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <Pressable onPress={handleBack}>
                <Image
                  source={require('../assets/images/icon_back_black.png')}
                  style={styles.backButton}
                />
              </Pressable>
              <Text style={styles.favourite}>Favourite</Text>
            </View>

            <View style={styles.rightHeader}>
              <Pressable>
                <Image
                  source={require('../assets/images/search.png')}
                  style={styles.searchButton}
                  tintcolor='black'
                />
              </Pressable>
            </View>
          </View>

          {/* <NoFav type='Favourites Added'/>*/}
         <CityList/>
          {/*  */}

        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Favourites;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  safeView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  header: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favourite: {
    height: 24,
    width: 204,
    color: '#292F33',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 24,
    textShadow: '0 2px 2px 0 rgba(0,0,0,0.15)',
    marginLeft: 34,
  },
  backButton: {
    height: 16,
    width: 16,
  },
  searchButton: {
    height: 17.49,
    width: 17.49,
    tintColor: "#000000",
  },
});
