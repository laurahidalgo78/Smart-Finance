import { NavigationContainer } from "@react-navigation/native";
import StackInicio from "./StackInicio";

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <StackInicio />
        </NavigationContainer>
    );
}