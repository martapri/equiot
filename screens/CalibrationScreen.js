import { StyleSheet, Text, View, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Svg, Path } from 'react-native-svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CalibrationScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1.75}}>
      <Svg
        width='100%'
        height={windowHeight * 0.3}
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 1440 290"
        style={styles.waveFormHeader}
      >
        <Path
          fill="#F2A516"
          fillOpacity={1}
          d="M0,192L24,186.7C48,181,96,171,144,181.3C192,192,240,224,288,224C336,224,384,192,432,192C480,192,528,224,576,245.3C624,267,672,277,720,256C768,235,816,181,864,170.7C912,160,960,192,1008,176C1056,160,1104,96,1152,90.7C1200,85,1248,139,1296,160C1344,181,1392,171,1416,165.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        />
      </Svg>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/media/equiot.png')}
          style={styles.logoImage}
        />
      </View>
        </View>
      
    </View>
  );
};

export default CalibrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: '1rem',
        flexWrap: "wrap",
      },
      waveFormHeader: {
        position: 'relative',
        display: 'inline-block',
        top: 0,
        left: 0,
      },
      logoContainer: {
        position: 'absolute',
        top: 0, //windowHeight * 0.4 - windowWidth * 0.15, // Adjust the position as needed
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoImage: {
        width: 210,
        height: 140,
        resizeMode: 'contain',
        opacity: 0.9,
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
      },
});