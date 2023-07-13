import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '.././firebase-config'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'


const LoginScreen = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth (app);
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log("Account created!")
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        console.log("Signed in!")
        const user = userCredential.user;
        navigation.navigate('HomeScreen');
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
    <Image source={require('../assets/media/logo.png')} style={styles.topImage} />
    <View style={styles.inputContainer}>
    
    <TextInput placeholder="Email"
      value={email}
      onChangeText={text => setEmail(text)}
    style={styles.input}
    />
    <TextInput placeholder="Password"
      value={password}
      onChangeText={text => setPassword(text)}
    style={styles.input}
    secureTextEntry
    />
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={handleSignIn}
        style={styles.button}
      >
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={handleCreateAccount}
      style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Register</Text>
      </TouchableOpacity>
      
    </View>
    <Image source={require('../assets/media/horselogo.png')} style={styles.bottomImage} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    paddingVertical: 100,
    alignItems: 'center',
  },
  topImage: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 250, // Adjust the width as per your needs
    height: 250, // Adjust the height as per your needs
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '80%'
   }, 
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
   },
  buttonContainer: { 
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: { 
    backgroundColor: '#F2A516',
    width: '100%',
    padding:15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { 
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: { 
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#F2A516',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#F2A516',
    fontWeight: '700',
    fontSize: 16,
   }, 

})