import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import {
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { data } from "@/components/Dashboard/data";
import { DataTable } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const screenWidth = Dimensions.get("window").width;

export default function vistorboard() {
  const renderItems = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(
        <View
          key={i}
          className="flex flex-row justify-between bg-white shadow-md rounded-md  px-2 py-4"
        >
          <View>
            <Text>Damilola Esan</Text>
          </View>
          <View>
            <Text>2/23</Text>
          </View>
          <View>
            <Text>13:1</Text>
          </View>
          <View>
            <Entypo name="dots-three-vertical" size={18} color="black" />
          </View>
        </View>
      );
    }
    return items;
  };
  const handleItemClick = (item: any) => {
    // Handle click event for each item (e.g., navigate to details screen)
    console.log("Clicked item:", item);
  };
  return (
    <View
      className={"flex-1 items-start w-[100%] bg-white   pt-32 px-5"}
      style={{ maxWidth: screenWidth }}
    >
      <View className="flex-row items-center gap-2 flex   ">
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
        contentContainerClassName="  w-[100%] justify-center items-center "
        // contentContainerStyle={{ paddingHorizontal: 3 }}
        showsVerticalScrollIndicator={false}
      >
        <View className=" w-[100%]   mb-10   ">
       
          <View className=" flex flex-row justify-between px-3 w-[100%] py-4 bg-white shadow-md mt-6 rounded-md">
            <View>
              <Text>Create form for your visitor</Text>
            </View>
            <View>
              <FontAwesome6 name="arrow-right-long" size={24} color="black" />
            </View>
          </View>
          <View className=" flex flex-row justify-between  mt-6 ">
            <View>
              <Text>History</Text>
            </View>
            <View>
              <Ionicons name="filter" size={24} color="black" />
            </View>
          </View>

          <View className="gap-3">{renderItems()}</View>
        </View>
      </ScrollView>
    </View>
  );
}
