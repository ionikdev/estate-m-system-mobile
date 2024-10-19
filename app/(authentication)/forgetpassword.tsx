import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";


import { ForgotPassword } from "@/components/Auth/Forgetpassword/Forgetpassword";

export default function Forgetpassword() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ForgotPassword/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
