import { Button } from "@/components/Auth/Button";
import { Input } from "@/components/Auth/Input";
import { View } from "@/components/Themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, router } from "expo-router";
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
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function SignIn() {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues:{
      email:"ionki@gmail.com",
      password:"12345"
    }
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    console.log("Reset password for email:", data.email);

    try {
      // Assuming router.push returns a promise
      router.push("/(tabs)/home");
      console.log("Navigation successful");
    } catch (error) {
      console.error("Error navigating:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className=" flex-1  items-center justify-center">
      <ScrollView
        contentContainerClassName="flex-grow"
        automaticallyAdjustKeyboardInsets
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 flex  justify-center">
          <Text className=" text-3xl font-bold text-center ">Login</Text>

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

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry
                placeholder="Password "
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <View className="  flex flex-row justify-between items-center pt-5 pb-5">
            <View>
              <Text>Remember Me</Text>
            </View>
            <View className="flex flex-row  items-center">
              <Text>Forget </Text>
              <View>
                <Link href="/forgetpassword" asChild>
                  <TouchableOpacity>
                    <Text className=" text-blue font-bold"> Password?</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>
        </View>

        <Button
          title={"Sign In"}
          onPress={handleSubmit(onSubmit)}
          isValidForm={isValid}
        />
        <View className=" flex items-center justify-center pt-5 pb-5">
          <View className="flex flex-row  items-center">
            <Text>Don't have an account? </Text>
            <View>
              <Link href="/(authentication)" asChild>
                <TouchableOpacity>
                  <Text className=" text-blue  font-bold"> Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
