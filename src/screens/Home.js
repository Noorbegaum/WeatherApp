import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import BottomScroll from '../components/BottomScroll';
import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../redux/WeatherSlice';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import { addCity } from '../redux/OperationSlice';
import uuid from 'react-native-uuid';


const image = require('../assets/images/background.png');
const source = require('../assets/images/icon_mostly_sunny_small.png');

const Home = ({navigation}) => {
  const [search, setSearch] = useState(false);
  const list = useSelector(state => state.favourites.list);
  
  const [celcius, setCelsius] = useState(list.current.temp_c);
  
  const [date, setDate] = useState('');
  const currentDateTime = () => {
    const dateTimeMoment = moment()
      .utcOffset('+05:30')
      .format('ddd, DD MMM YY     hh:mm a')
      .toUpperCase();
    setDate(dateTimeMoment);
  };

  useEffect(() => {
    currentDateTime();
  }, []);

  const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getData())
  // },[dispatch])

  const handleDrawer = () => {
    navigation.openDrawer();
  };
  const handleSearch = () => {
    setSearch(!search);
  };
  const handleFaranheit = () => {
    setCelsius(list.current.temp_f);
  };
  const handleCelcius = () => {
    setCelsius(list.current.temp_c);
  };
  const obj={
    id:list.location.name,
    city:list.location.name,
    source:source,
    temperature:celcius,
    description:list.current.condition.text
  }
  console.log(obj)
  const handlePress = () =>{
    dispatch(getData())
    dispatch(addCity(obj))
  }

  return (
    <>
      {!search ? (
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <SafeAreaView style={styles.safeView}>
              <View style={styles.header}>
                <View style={styles.headerMenu}>
                  <Pressable onPress={handleDrawer}>
                    <Image
                      source={require('../assets/images/burgerMenu.png')}
                      style={styles.menu}
                    />
                  </Pressable>
                  <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                  />
                </View>
                <View style={styles.headerMenu}>
                  <Pressable onPress={handleSearch}>
                    <Image
                      source={require('../assets/images/search.png')}
                      style={styles.search}
                    />
                  </Pressable>
                </View>
              </View>

              <View style={{height: '73%'}}>
                <ScrollView>
                  <View style={styles.weatherReport}>
                    <Text style={styles.timeline}> {date}</Text>
                    <Text style={styles.city}>
                      {list.location.name}, {list.location.region}
                    </Text>
                    <View style={styles.fav}>
                      <TouchableOpacity onPress={handlePress}>
                        <Image
                          source={require('../assets/images/icon_favourite.png')}
                          style={styles.search}
                        />
                      </TouchableOpacity>
                      <Text style={styles.favText}>Add to favourite</Text>
                    </View>
                  </View>

                  <View style={styles.middleView}>
                    <Image
                      source={require('../assets/images/icon_mostly_sunny_small.png')}
                      style={styles.symbol}
                    />
                    <View style={styles.tempGroup}>
                      <Text style={styles.actualTemp}>
                        {celcius}
                        </Text>
                      <View style={styles.unitGroup}>
                        {celcius == list.current.temp_c ? (
                          <>
                            <TouchableOpacity onPress={handleCelcius}>
                              <Text style={styles.celcius}>°C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleFaranheit}>
                              <Text style={styles.faranheit}>°F</Text>
                            </TouchableOpacity>
                          </>
                        ) : (
                          <>
                            <TouchableOpacity onPress={handleCelcius}>
                              <Text style={styles.faranheit}>°C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleFaranheit}>
                              <Text style={styles.celcius}>°F</Text>
                            </TouchableOpacity>
                          </>
                        )}
                      </View>
                    </View>
                    <Text style={styles.mostlySunny}>
                      Mostly 
                      {list.current.condition.text}
                    </Text>
                  </View>
                </ScrollView>
              </View>

              <BottomScroll />
            </SafeAreaView>
          </ImageBackground>
        </View>
      ) : (
        <Search setSearch={setSearch} search={search} />
      )}
    </>
  );
};

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
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: '5%',
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  menu: {
    height: 12,
    width: 18,
  },
  logo: {
    marginLeft: 35,
    height: 24,
    width: 113,
  },
  search: {
    height: 17.49,
    width: 17.49,
  },
  weatherReport: {
    alignItems: 'center',
  },
  timeline: {
    height: 15,
    opacity: 0.6,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 78,
  },
  fav: {
    flexDirection: 'row',
    marginTop: 23,
  },
  city: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
  favText: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    marginLeft: 7,
  },
  bottomDetails: {
    width: '35%',
  },
  detailView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    alignSelf: 'center',
    height: 100,
    justifyContent: 'space-evenly',
  },
  insideScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255,0.3)',
    flex: 1,
  },
  temperature: {
    marginTop: 30,
    marginHorizontal: 18,
    flexDirection: 'row',
    height: 41,
    width: 94,
  },
  tempIcon: {
    height: 26,
    width: 13,
    marginRight: 18,
  },
  minmax: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
  },
  tempNumber: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
  },
  middleView: {
    alignItems: 'center',
    marginTop: 81,
  },
  unitGroup: {
    height: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    marginTop: 20,
    marginLeft: 5,
    borderWidth: 1,
  },
  symbol: {
    height: 67,
    width: 64,
    marginBottom: 15,
  },
  tempGroup: {
    height: 61,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mostlySunny: {
    height: 21,
    width: 108,
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 11,
  },
  actualTemp: {
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 61,
  },
  celcius: {
    color: '#E32843',
    fontSize: 16,
    letterSpacing: 0,
    lineheight: 19,
    backgroundColor: '#FFFFFF',
    padding: 5,
  },
  faranheit: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 0,
    lineheight: 19,
    padding: 5,
  },
});

export default Home;
