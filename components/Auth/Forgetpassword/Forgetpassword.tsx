import { Button } from "@/components/Auth/Button";
import { Input } from "@/components/Auth/Input";
import { View } from "@/components/Themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, router } from "expo-router";
import { Heading } from "native-base";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function ForgotPassword() {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    console.log("Reset password for email:", data.email);

    try {
      // Assuming router.push returns a promise
      router.push("/emailverification");
      console.log("Navigation successful");
    } catch (error) {
      console.error("Error navigating:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className=" bg-gray-400 h-[100%] flex-1 flex items-center justify-center">
      <ScrollView
        contentContainerClassName="flex-grow    justify-center"
        automaticallyAdjustKeyboardInsets
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 flex  justify-center">
          <View className=" justify-center items-center  text-cyan-500 uppercase">
            <Text className="text-3xl font-bold">Forgot Password</Text>
          </View>
          <View className="flex  pt-10">
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Email Address"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  errorMessage={errors.email?.message}
                />
              )}
            />
          </View>
          <View className="flex  items-center justify-center ">
            <Text>Remember your password? </Text>
            <View>
              <Link href="/emailverification" asChild>
                <TouchableOpacity>
                  <Text className="text-blue text-xl pt-4 font-bold">Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
        <View className=" pb-5">
          <Button
            title={loading ? <ActivityIndicator /> : "Reset Password"}
            onPress={handleSubmit(onSubmit)}
            isValidForm={isValid}
          />
        </View>
      </ScrollView>
    </View>
  );
}
