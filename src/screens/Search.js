import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Search = ({setSearch, search}) => {
  const [icon, setIcon] = useState(null);
  const [text, setText] = useState();
  const handleBack = () => {
    setSearch(!search);
  };
  const handleChange = value => {
    setText(value)
    setIcon(require('../assets/images/icon_clear.png'));
  };
  const handleClear = () => {
    setText();
 
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
