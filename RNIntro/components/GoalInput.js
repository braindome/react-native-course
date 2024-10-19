import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Your cheese goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
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
})