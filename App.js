import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { LoginStack } from "./src/navigation/LoginStack";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    </>
  );
}
