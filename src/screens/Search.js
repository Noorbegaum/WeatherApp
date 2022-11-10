import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  Text,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import { SearchApi } from '../services/SearchApi';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/WeatherSlice';
import { setFavourite } from '../redux/OperationSlice';
import { addRecentCity } from '../redux/OperationSlice';
const Search = ({setSearch, search}) => {
  const list = useSelector(state => state.favourites.list);
  const favourite = useSelector(state => state.operations.favourite);

  const [icon, setIcon] = useState(null);
  const [text, setText] = useState();
  const [data,setData] = useState ()
  
  const [celcius, setCelsius] = useState(list.current?.temp_c);
  const dispatch = useDispatch();
  
  const obj = {
    id: list.location?.name,
    city: list.location?.name,
    region:list.location?.region,
    source: {uri:`https:${list.current?.condition.icon}`},
    temperature: celcius,
    description: list.current?.condition.text,
    favourite:favourite,
  };

 
  const handleBack = () => {
    setSearch(!search);
  };
  const handleChange = async  (value) => {
    setText(value)
    setIcon(require('../assets/images/icon_clear.png'));
    const Data = await SearchApi(value)
    setData(Data)
    
  };
  const handleClear = () => {
    setText();
 
  };
  const handleSearh = (item) =>{
    setText(item.name)
    dispatch(setFavourite(false))
    setSearch(!search)
    dispatch(getData(item.name))
    dispatch(addRecentCity(obj))
    console.log("I am Data",data);
  }

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
            <TextInput
              placeholder="Search for city"
              value={text}
              onChangeText={value => handleChange(value)}
              style={styles.text}
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.rightHeader}>
            {text ? (
              <TouchableOpacity onPress={handleClear}>
                <Image source={icon} style={styles.clearButton} />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </View>
        <View >
          <FlatList
        data={data}
        renderItem={({item})=>(
          (
            <Pressable onPress={()=>handleSearh(item)}>
           <View style={styles.header}>
            <Text>{item.name}</Text>
            </View>
            </Pressable>
          )
        )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  text: {
    height: 36,
    color: 'black',
    fontSize: 14,
    marginStart: 32,
  },
  clearButton: {
    height: 14,
    width: 14,
  },
});

export default Search;
