import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, Image } from "react-native-elements";
import { LoginForm } from "../../components/Auth";
import { styles } from "./LoginScreen.style";

export function LoginScreen() {
  return (
    <KeyboardAwareScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../assets/img/Logo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Inicia tu sesión</Text>
      <View>
        <LoginForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
