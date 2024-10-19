import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: "darkpurple"}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor: "purple",
        borderColor: "#000",
        borderWidth: 1,
    },
    pressedItem: {
      opacity: 0.5
    },
    goalText: {
        padding: 10,
        fontSize: 18,
        color: "white",
    },
})