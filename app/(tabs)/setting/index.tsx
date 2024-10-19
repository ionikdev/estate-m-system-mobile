import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import { Link, router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export const options = [
  {
    title: "Personal Information",
    icon: "user",
    route: "/profile/edit-profile-info",
  },
  {
    title: "Login & Security",
    icon: "lock",
    route: "/profile",
  },
  {
    title: "Notifications",
    icon: "bell",
    route: "/profile",
  },
  {
    title: "Privacy Policy",
    icon: "shield",
    route: "/profile",
  },
  {
    title: "Preferences",
    icon: "settings",
    route: "/profile",
  },
  {
    title: "Payment Methods",
    icon: "credit-card",
    route: "/profile",
  },
  {
    title: "Shipping Address",
    icon: "map-pin",
    route: "/profile",
  },
  {
    title: "Help & Support",
    icon: "help-circle",
    route: "/profile",
  },
];

export default function Settings() {
  return (
    <View className="flex-1  bg-white pb-8">
           <StatusBar style="light" />
      <View className=" bg-blue p-10 rounded-xl shadow-2xl shadow-white  pt-20 flex-row items-center">
        <View className="flex-row items-center justify-between">
          <View>
            <Feather
              name="user"
              size={34}
              color="white"
              className="w-12 h-12  items-center  rounded-full mr-4"
            />
          </View>

          <View className="justify-center">
            <Text className="text-2xl text-white font-semibold">Sax Dower</Text>
            <Text className="text-sm text-white font-medium">
              @dammy
            </Text>
          </View>
          <Feather
            name="alert-circle"
            size={20}
            color="red"
            className="w-8 h-8 ml-2"
          />
        </View>
        <View className="ml-auto">
          <Link href="/" asChild>
            <TouchableOpacity>
              <Feather
                name="arrow-right"
                size={24}
                color="white"
                className="w-12 h-12"
              />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-10 px-6">
        {options.map((option, index) => (
          <TouchableOpacity
            onPress={() => {
              if (option.route) {
                router.push(option.route as any);
              } else {
                console.warn("Route is undefined for action: ");
              }
            }}
            key={index}
            className="flex-row items-center justify-between my-3 py-4 border-b border-gray-300"
          >
            <View className="flex-row items-center gap-2">
              <Feather
                name={option.icon as any}
                size={20}
                color="black"
                className="w-8 h-8"
              />
              <Text className="text-base font-medium">{option.title}</Text>
            </View>
            <Feather
              name="chevron-right"
              size={20}
              color="black"
              className="w-5 h-5"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity>
        <Text className="text-base font-semibold text-center mt-6">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
