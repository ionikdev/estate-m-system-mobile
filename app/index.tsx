import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { router } from "expo-router";
import Onboarding from "@/components/onboarding/Onboarding";
import { SignIn } from "@/components/Auth/Signin/SignIn";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Onboarding />
      {/* <SignIn /> */}
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
