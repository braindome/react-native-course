import {View, Text, StyleSheet} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {useSelector} from "react-redux";

function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext); // This is the context API
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids); // This is Redux
    const favoriteMeals = MEALS.filter((meal) =>
        // favoriteMealsCtx.ids.includes(meal.id) // This is the context API
        favoriteMealsIds.includes(meal.id) // This is Redux
    );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text} >No favorite meals found. Start adding some!</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});