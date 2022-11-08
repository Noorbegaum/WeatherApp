import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

const BottomScroll = () => {
  return (
    <View style={styles.detailView}>
      <ScrollView horizontal={true}>
        <View style={styles.insideScroll}>
          <View style={styles.bottomDetails}>
            <View style={styles.temperature}>
              <Image
                source={require('../assets/images/icon_temperature_info.png')}
                style={styles.tempIcon}
              />
              <View>
                <Text style={styles.minmax}>Min - Max</Text>
                <Text style={styles.tempNumber}>22°- 34°</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomDetails}>
            <View style={styles.temperature}>
              <Image
                source={require('../assets/images/icon_precipitation_info.png')}
                style={styles.precipitationIcon}
              />
              <View>
                <Text style={styles.minmax}>Precipitation</Text>
                <Text style={styles.tempNumber}>0%</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomDetails}>
            <View style={styles.temperature}>
              <Image
                source={require('../assets/images/icon_humidity_info.png')}
                style={styles.HumidityIcon}
              />
              <View>
                <Text style={styles.minmax}>Humidity</Text>
                <Text style={styles.tempNumber}>47%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BottomScroll;

const styles = StyleSheet.create({

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
    precipitationIcon: {
        height: 23,
        width: 24,
        marginRight: 18,
      },
    HumidityIcon: {
        height: 20,
        width: 15,
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

  });