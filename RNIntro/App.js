import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText} >{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

    </View>
  );
}

export function Flexbox() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "column-reverse",
        width: "80%",
        height: 300,
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 25,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "ccc",
    width: "70%",
    padding: 10,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 3,
  },
  goalItem: {
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "purple",
    borderColor: "#000",
    borderWidth: 1,
  },
  goalText: {
    fontSize: 18,
    color: "white",
  },
});
