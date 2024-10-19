import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";


import { SignIn } from "@/components/Auth/Signin/SignIn";

export default function Signin() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <SignIn />
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
