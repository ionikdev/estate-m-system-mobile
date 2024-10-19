import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { SignUp } from "@/components/Auth/Signup/SignUp";

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <SignUp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
