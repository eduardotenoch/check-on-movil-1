import React from "react";
import { View } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { styles } from "./LoginForm.style";

export function LoginForm() {
  return (
    <View style={styles.content}>
      <Input placeholder="Usuario" containerStyle={styles.input} />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={true}
      />
      <Text style={styles.rpcon}>Recuperar contraseña</Text>
      <Button
        title="Ingresar"
        containerStyle={styles.btncontainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
