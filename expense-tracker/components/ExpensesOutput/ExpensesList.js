import ExpenseItem from "./ExpenseItem";
import { FlatList } from "react-native";

function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({expenses}) {
    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => {
        return item.id;
    }}/>
}

export default ExpensesList;