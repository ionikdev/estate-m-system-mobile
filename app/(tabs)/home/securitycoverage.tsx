import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { router } from "expo-router";
import Onboarding from "@/components/onboarding/Onboarding";

export default function securitycoverage() {
  return (
    <SafeAreaView
      className={"flex-1 items-center  w-[100%] bg-white    pt-32 px-5"}
    >
      <Image
        source={require("../../../assets/images/dashboard/image1.png")} // Replace './path/to/your/image.jpg' with the actual path to your image file
        style={{ width: 200, height: 200 }}
      />
      <View className=" items-center">
        <Text className=" font-bold text-3xl text-black mt-4">
          Let Get Connected
        </Text>
        <Text className=" text-center font-bold text-xl text-black opacity-40 mt-4">
          Get Connected using a Qr-code or an ip address. Control your security
          cameras from your mobile phone
        </Text>
      </View>
      <View className=" flex flex-row items-center gap-3 mt-10">
        <View className="items-center gap-2 bg-white shadow-lg shadow-black p-5 px-8 rounded-lg">
          <Image
            source={require("../../../assets/images/dashboard/image1.png")} // Replace './path/to/your/image.jpg' with the actual path to your image file
            style={{ width: 70, height: 70 }}
          />
          <Text>QR CODE</Text>
        </View>
        <View className="items-center gap-2 bg-white shadow-lg shadow-black p-5 px-8 rounded-lg">
          <Image
            source={require("../../../assets/images/dashboard/image2.png")} // Replace './path/to/your/image.jpg' with the actual path to your image file
            style={{ width: 70, height: 70 }}
          />
          <Text>IP ADDRESS</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
