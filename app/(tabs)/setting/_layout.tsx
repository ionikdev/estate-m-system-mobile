import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 14,
            fontWeight: "700",
            color: "black",
          },
          headerTitle: " ",
     
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 5,
  },
  skipButton: {
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: "400",
    alignItems: "center",
    gap: 5,
  },
});
