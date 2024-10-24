import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";

export default function App() {

    const [userNumber, setUserNumber] = useState();

    function picketNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={picketNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} />
    }

    return (

        <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
    backgroundImage: {
      opacity: 0.15
    }
});
