import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { data } from "@/components/Dashboard/data";
import { Link, router } from "expo-router";

const screenWidth = Dimensions.get("window").width;

export default function TabOneScreen() {
  const handleItemClick = (item: any) => {
 router.push(item.route)
    console.log("Clicked item:", item);
  };
  return (
    <View
      className={"flex-1 items-start w-[100%] bg-white  pt-32 px-5"}
      style={{ maxWidth: screenWidth }}
    >
      <View className="flex-row items-center gap-2 flex mb-3 shadow-sm   ">
        <View className=" w-[80%]  bg-white shadow-md shadow-black rounded-md p-4 h-16">
          <TextInput
            className="flex-1 text-sm"
            placeholder="Enter Keyword here..."
            placeholderTextColor="gray"
          />
        </View>
        <TouchableOpacity>
          <View className=" bg-white  shadow-lg shadow-black h-16 items-center justify-center rounded-md p-3">
            <Ionicons name="search" size={24} color="black" className="" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerClassName="  w-[100%] "
        // contentContainerStyle={{ paddingHorizontal: 3 }}
        showsVerticalScrollIndicator={false}
      >
        <View className=" w-[78%]  mb-10   ">
      
          
      {/* <View className=" bg-blue gap-4 flex-row items-center  px-2  py-3  mt-[20px] rounded-lg">
        <View className="  ">
          <MaterialIcons name="contact-phone" size={30} color="white" />
        </View>
        <View className=" text-white items-start mx-3 px-3 ">
          <Text className="text-white  ">Estate Phone Book</Text>
          <Text className="text-white  ">
            All Importantt Phone Estate Number
          </Text>
          <Text className="text-white max-w-[95%] ">
            Ranging from security,plumber, electrician etc...
          </Text>
        </View>
      </View> */}
          {data.map((item) => (
            
            <TouchableOpacity
           
              key={item.id}
              onPress={() => handleItemClick(item)}
            >
          
              <View
                key={item.id}
                className="bg-white shadow-md shadow-blue h-36 gap-1 flex-row items-center px-4 py-3  mt-[10px] rounded-md border border-white"
              >
                <Image
                  source={item.image}
                  style={{ width: 60, height: 30, borderRadius: 25 }}
                />
                <View className="text-white items-start px-3 gap-2   ">
                  <Text className="text-black font-bold text-2xl">
                    {item.title}
                  </Text>
                  <Text className="text-black max-w-[90%]">
                    {item.description}
                  </Text>
                  <Text className=" text-sm font-bold text-blue">
                    View more
                  </Text>
                  {/* You can add more Text components for other data fields */}
                </View>
              </View>
          
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
