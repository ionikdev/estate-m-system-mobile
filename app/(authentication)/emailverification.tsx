import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { EmailVerification } from "@/components/Auth/Emailverification/Emailverification";

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <EmailVerification />
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
