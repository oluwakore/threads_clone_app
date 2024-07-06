import * as React from 'react'
import { Platform, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import Lottie from 'lottie-react-native'
import { createRandomUser } from '../../utils/generate-data';
import { ThreadsContext } from '../../context/thread-context';
import ThreadsItem from '../../components/ThreadsItem';



export default function TabOneScreen() {

  const animationRef = React.useRef<Lottie>(null)
  const threads = React.useContext(ThreadsContext)

  return (
    <SafeAreaView>
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: Platform.select({ android: 30 }),
        paddingBottom: Platform.select({ android: 30 }),
      }}
      refreshControl={
        <RefreshControl 
          refreshing={false}
          onRefresh={() => {
            animationRef.current?.play()
          }}
          tintColor={"transparent"}       
        />
      }
      >
        <Lottie
        ref={animationRef} 
        source={require("../../animations/threads_animation.json")}
        autoPlay
        loop={false}
        style={{width: 70, height: 70, alignSelf: "center", marginBottom: 20}}
        />
        {threads.map((thread) => (
        <ThreadsItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

