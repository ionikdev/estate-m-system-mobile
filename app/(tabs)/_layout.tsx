import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { AntDesign, Entypo, Ionicons, Octicons } from "@expo/vector-icons";

import { Text } from "react-native";

interface TabBarIconProps {
  library: "FontAwesome" | "AntDesign" | "Entypo" | "Ionicons" | "Octicons"; // Icon library options
  name: string; // Icon name
  color: string; // Icon color
}
export const TabBarIcon: React.FC<TabBarIconProps> = ({
  library,
  name,
  color,
}) => {
  let IconComponent: any;
  switch (library) {
    case "FontAwesome":
      IconComponent = FontAwesome;
      break;
    case "AntDesign":
      IconComponent = AntDesign;
      break;
    case "Entypo":
      IconComponent = Entypo;
      break;
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "Octicons":
      IconComponent = Octicons;
      break;
    default:
      IconComponent = FontAwesome;
  }

  return (
    <IconComponent
      name={name}
      size={24}
      color={color}
      style={{ marginBottom: -15 }}
    />
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),

        tabBarStyle: {
          backgroundColor: "#0E315D",
          height: 75,

          borderBlockStartColor: "#fff",
        },
        // tabBarLabel: () => null,
        tabBarLabelStyle: { marginBottom: 10 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => (
            <TabBarIcon library="AntDesign" name="home" color={color} />
          ),
          // headerStyle: {
          //   marginTop: 20,
          // },
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              library="Ionicons"
              name="chatbubbles-outline"
              color={color}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color }) => (
            <TabBarIcon library="Octicons" name="person" color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "Settings",

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              library="Ionicons"
              name="settings-outline"
              color={color}
            />
          ),
          headerShown: false,
          // headerLeft: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
    </Tabs>
  );
}
