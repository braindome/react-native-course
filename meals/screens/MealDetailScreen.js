import {View, Text, Image, StyleSheet, ScrollView, Button} from "react-native";
import {MEALS} from "../data/dummy-data";
import { useLayoutEffect, useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {useDispatch, useSelector} from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({route, navigation}) {
    // const favoriteMealsCtx = useContext(FavoritesContext); // This is the context API
    const favoriteMealIds = useSelector( (state) => state.favoriteMeals.ids); // This is Redux
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId); // This is the context API
    const mealIsFavorite = favoriteMealIds.includes(mealId); // This is Redux

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId); // This is the context API
            dispatch(removeFavorite({id: mealId})); // This is Redux
        } else {
            // favoriteMealsCtx.addFavorite(mealId); // This is the context API
            dispatch(addFavorite({id: mealId})); // This is Redux

        }
    }

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerRight: () => {
                    return (
                        <IconButton
                            icon={mealIsFavorite ? "star" : "star-outline"}
                            color={"white"}
                            onPress={changeFavoriteStatusHandler}
                        />
                    )
                }
            }
        );
    }, [navigation, changeFavoriteStatusHandler]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>

        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listOuterContainer: {
        alignItems: "center"
    },
    listContainer: {
        width: "80%",

    }
});