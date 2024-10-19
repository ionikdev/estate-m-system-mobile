import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,

} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/Auth/Button";
import { Input } from "@/components/Auth/Input";
import { View } from "@/components/Themed";
import { Link, router } from "expo-router";

const schema = yup
  .object({
    otp1: yup.string().required("Please enter OTP"),
    otp2: yup.string().required("Please enter OTP"),
    otp3: yup.string().required("Please enter OTP"),
    otp4: yup.string().required("Please enter OTP"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function EmailVerification() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const [timer, setTimer] = useState(120); // 2 minutes timer
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Start the timer when the component mounts
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => {
      // Clear the timer when the component unmounts
      clearInterval(timerRef.current);
    };
  }, []);

  const onSubmit = (data: FormData) => {
    // Handle OTP submission
    console.log("OTP submitted:", data);
    router.push('/(tabs)');
  };
  const handleKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && index > 0) {
      inputRefs[index - 1].current?.focus(); // Move focus to the previous input field if Backspace is pressed and the current index is greater than 0
    } else if (index < inputRefs.length - 1 && !isNaN(Number(key))) {
      inputRefs[index + 1].current?.focus(); // Move focus to the next input field if a number is entered in the current field and the current index is less than the last index
    }
  };
  
  

  return (
    <View className="flex-1 bg-gray-400 items-center justify-center ">
      <Text className="mt-24 mb-12 text-blue-500 text-3xl font-bold">
        Enter OTP
      </Text>

      <Text className="mb-5 text-gray-600">
        Time remaining: {timer} seconds
      </Text>

      <ScrollView
        contentContainerClassName="flex-grow"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-1 flex-row justify-between ">
        {[0, 1, 2, 3].map((index) => (
  <Controller
    key={index}
    control={control}
    name={`otp${index + 1}`}
    render={({ field: { onChange, value } }) => (
      <TextInput
        ref={inputRefs[index]}
        className="border-2 border-blue w-16 h-16 text-center rounded-md"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => {
          onChange(text);
          handleKeyPress(index, text);
        }}
        value={value}
        onFocus={() => {
          // Move to the end of the input when it's focused
          inputRefs[index].current?.setSelection(1);
        }}
      />
    )}
  />
))}
        </View>
        
        <View className="">
        <Button
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          isValidForm={isValid}
        />

        </View>

     
        <View className="flex flex-row justify-center pt-5 pb-5 text-center items-center ">
          <Text>Didn't receive OTP? </Text>
          <Link href="/" asChild>
            <TouchableOpacity>
              <Text className="text-blue-500 font-bold">Resend OTP</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}
