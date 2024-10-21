import {Button, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    const myRef = useRef(null);

    const handlePress = () => {
        if (myRef.current) {
            console.log('Ref is not null');
        }
    };
    return (
        <View>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;