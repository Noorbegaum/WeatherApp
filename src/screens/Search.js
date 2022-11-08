import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';

const Search = ({navigation}) => {
  const handleBack = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Pressable onPress={handleBack}>
              <Image
                source={require('../assets/images/icon_back_black.png')}
                style={styles.backButton}
              />
            </Pressable>
            <Text style={styles.favourite}>Search for City</Text>
          </View>
          <View style={styles.rightHeader}>
          <Pressable>
            <Image
              source={require('../assets/images/icon_clear.png')}
              style={styles.clearButton}

            />
          </Pressable>
        </View>
        </View>

      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#2c3e50',
  //   },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  safeView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(105,105,105,0.2)',
    borderBottomWidth: 1,
  },
  backButton: {
    height: 16,
    width: 16,
  },
  favourite: {
    height: 36,
    opacity: 0.3,
    color: '#000000',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 36,
    marginStart: 32,
  },
 clearButton: {
    height: 14,
    width: 14,
    opacity: 0.4,
},
});

export default Search;
