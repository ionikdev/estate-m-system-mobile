import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <View style={{ paddingLeft: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Welcome, Oyenchachi
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "200", opacity: 0.5 }}>
                A pleasure to have you here
              </Text>
            </View>
          ),

          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View
                    style={{
                      backgroundColor: "#0E315D",
                      marginRight: 15,
                      borderRadius: 12,
                      padding: 3,
                    }}
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={24}
                      color="#fff"
                      style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="vistorboard"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 14,
            fontWeight: "700",
            color: "black",
          },
          headerTitle: " ",
          headerLeft: () => (
            <Link href="/(tabs)/home" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <FontAwesome6
                    name="arrow-left-long"
                    size={24}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="securitycoverage"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 14,
            fontWeight: "700",
            color: "black",
          },
          headerTitle: " ",
          headerLeft: () => (
            <Link href="/(tabs)/home" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <FontAwesome6
                    name="arrow-left-long"
                    size={24}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
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
