import { StyleSheet, Text, View, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import {React , useCallback} from 'react';
import { Svg, Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const HomeScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView
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
        viewBox="0 0 1440 300"
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
      <View style={{flex: 1.25,  backgroundColor: '#F8E4BE'}}>
        <TouchableOpacity          
          style = {[styles.button,{flexDirection: 'row', alignItems: 'center',} ]}
          onPress = {() => navigation.navigate('CalibrationScreen')}
        >
          <View style={{ height: '100%', aspectRatio: 1 }}>
          <Image
            source={require('../assets/media/settings.png')}
            style={[
              {
                height: '100%',
                aspectRatio: 1,
                resizeMode: 'contain',}
            ]}
           /> 
          </View>
           <Text
            style={[
              styles.buttonLabelLeft,
              {flex: 4, }
            ]}>
            Ajustar Límites
          </Text> 
        </TouchableOpacity>
      </View>
      <View style={{flex: 1.25, backgroundColor: '#F8E4BE'}}>
        <TouchableOpacity          
          style={[ styles.button, {flexDirection: 'row', alignItems: 'center', } ]}>
          
          <Text
            style={[ styles.buttonLabelRight, {flex: 4,},]}>
            Mis caballos
          </Text>
          <View style={{ height: '100%', aspectRatio: 1 }}>
          <Image
            source={require('../assets/media/horse.png')}
            style={[
              {
              height: '100%',
              aspectRatio: 1,
              resizeMode: 'contain',}
            ]}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1.25, backgroundColor: '#F8E4BE'}}>
        <TouchableOpacity          
          style={[
            styles.button,
           {
            flexDirection: 'row',
            alignItems: 'center',
           } ]}>
          <View style={{ height: '100%', aspectRatio: 1 }}>
          <Image
            source={require('../assets/media/rider.png')}
            style={[
              {
                height: '100%',
                aspectRatio: 1,
                resizeMode: 'contain',}
            ]}/>
          </View>
          <Text
            style={[
              styles.buttonLabelLeft,
              {
                // Try setting `flexDirection` to `"row"`.
                flex: 4,
              },
            ]}>
            Mis entrenamientos
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.25}} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: '16rem',
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
    width: 230,
    height: 150,
    resizeMode: 'contain',
    opacity: 0.9,
  },
  buttonImageLeft: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
    alignItems: 'center',
    opacity: 0.9,
  },
  buttonImageRight: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
    alignItems: 'center',
    opacity: 0.9,
  },
  buttonImageContainer: {
    flex: 2,
    alignItems: 'center',
  },

  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: windowHeight * 0.4 - windowWidth * 0.075, // Adjust the position as needed
    marginBottom:10,
    left: 0,
    right: 0,
  },
  button: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 0,
    alignSelf: 'flex-start',
    marginHorizontal: '0%',
    marginBottom: 0,
    minWidth: '100%',
    minHeight: '0%',
    textAlign: 'center',
  },
  buttonLabelLeft: {
    fontFamily: 'Athiti',
    fontSize: 25,   
    fontWeight: '500',
    color: 'black',
    textAlignVertical: 'center',
    marginLeft: 30,
    overflow:'scroll',
  },
  buttonLabelRight: {
    fontFamily: 'Athiti',
    fontSize: 25,   
    fontWeight: '500',
    color: 'black',
    textAlignVertical: 'center',
    marginLeft: 30,
  },
  
});