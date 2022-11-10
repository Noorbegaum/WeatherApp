import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import { getData } from '../redux/WeatherSlice';
import {useDispatch} from 'react-redux';
import {deleteRecentCity} from '../redux/OperationSlice';
import { setFavourite } from '../redux/OperationSlice';
const RecentList = ({navigation}) => {
  const dispatch = useDispatch();


  //   const data = useSelector(state => state.operations.value);
  const data = useSelector(state => state.operations.recent);
  console.log('I am Recent', data);
  const favourite = useSelector(state => state.operations.favourite);
  console.log("fav called",favourite)

  return (
    <View>
      <Text></Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
                dispatch(getData(item.id))
                {item.favourite ? dispatch(setFavourite(true)) :dispatch(setFavourite(false)) }
                navigation.navigate('Home')
              // Toast.show(`Deleted ${item.city} Successfully`);
            }}>
            {/* dispatch(deleteCity({id:item.city})) */}
            <View style={styles.listItem}>
              <View>
                <Text style={styles.location}>{item.city}, {item.region}</Text>
                <View style={styles.tempDetails}>
                  <Image source={item.source} style={styles.weather} />
                  <Text style={styles.actualTemp}>{item.temperature}</Text>
                  <Text style={styles.unit}>°C</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(deleteRecentCity({id: item.city}));
                    
                  }}>
                  {item.favourite ? (
                    // dispatch(setFavourite(true)),
                    <Image
                      source={require('../assets/images/icon_favourite_active.png')}
                      style={styles.favIcon}
                    />
                  ) : (
                    // dispatch(setFavourite(false)),
                    <Image
                      source={require('../assets/images/icon_favourite.png')}
                      style={styles.favIcon}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 80,
    marginHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  favIcon: {
    height: 17,
    width: 18,
    marginEnd: 20,
  },
  location: {
    height: 18,
    color: '#FFE539',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 18,
    marginLeft: 15,
    marginTop: 15,
  },
  tempDetails: {
    flexDirection: 'row',
  },
  weather: {
    height: 21,
    width: 22,
    marginLeft: 9,
    marginTop: 10,
    marginBottom: 16,
    marginRight: 1,
  },
  style3: {
    height: 14,
    width: 22,
    marginLeft: 9,
    marginTop: 10,
    marginBottom: 16,
    marginRight: 1,
  },
  style4: {
    height: 16,
    width: 21.52,
    marginLeft: 9,
    marginTop: 10,
    marginBottom: 16,
    marginRight: 1,
  },
  style6: {
    height: 21,
    width: 20,
    marginLeft: 9,
    marginTop: 10,
    marginBottom: 16,
    marginRight: 1,
  },
  actualTemp: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
    marginLeft: 9,
    marginTop: 11,
    marginBottom: 16,
    marginRight: 1,
  },
  unit: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    marginTop: 15,
    marginLeft: 1,
  },
  description: {
    height: 16,

    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 16,
    marginTop: 14,
    marginLeft: 17,
  },
});

export default RecentList;
