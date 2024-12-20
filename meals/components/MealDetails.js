import {Text, View, StyleSheet} from "react-native";

function MealDetails({duration, complexity, affordability, style, textStyle}) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailIem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailIem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailIem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    },
    detailIem: {
        marginHorizontal: 4,
        fontSize: 12
    },
});