
import React, {useState, useEffect} from 'react';
import { StyleSheet,TouchableOpacity ,View, Image, StatusBar } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import imagex from './assetsProjet\icons\eco-light-off.png';

const App=()=> {
   
  const [toggle, setToggle] = useState(false);

  const handleToglle = () => setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
    // Torch.switchState(toggle);
    Alert.alert("console.log: "+toggle);
    // Torch.switchState(toggle);
    Torch.switchState(true);
  },[toggle]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle); 
    });
    return subscription.remove();
  },[]);

  return (
    <View style={toggle ? styles.container_light : styles.container}>
      <TouchableOpacity onPress={ handleToglle }>

      <Image style={toggle? styles.lightingOn : styles.lightingOff} 
      source={
        toggle ? 
        require('./assetsProjet/icons/eco-light.png') :
        require('./assetsProjet/icons/eco-light-off.png')} />

         <Image style={styles.logoDio} 
      source={
        toggle ? 
        require('./assetsProjet/icons/logo-dio.png') :
        require('./assetsProjet/icons/logo-dio-white.png')} /> 
        </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container_light: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor:'white',
    width: 150,
    height: 150,
  },
  logoDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
