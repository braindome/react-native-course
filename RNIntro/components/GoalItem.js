import { Text, View, StyleSheet } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
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
})