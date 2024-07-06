import * as React from 'react'
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native'

export default function TabTwoScreen() {
  const animationRef = React.useRef<Lottie>(null)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Searching For Stuff</Text>
      <Lottie
        ref={animationRef} 
        source={require("../../animations/search_animation.json")}
        autoPlay
        loop={true}
        style={{width: 100, height: 100, alignSelf: "center"}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
