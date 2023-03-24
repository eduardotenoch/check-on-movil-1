import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.login.login} component={LoginScreen} />
    </Stack.Navigator>
  );
}
