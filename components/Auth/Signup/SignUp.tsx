import { Button } from "@/components/Auth/Button";
import { Input } from "@/components/Auth/Input";
import { View } from "@/components/Themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "expo-router";
import { Heading } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Password and password confirmation must match"
      )
      .required("Password confirmation is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <View className=" flex-1  items-center justify-center">
      <View className="mt-24 mb-12 text-cyan-500 uppercase">
        <Text className=" text-3xl font-bold  "> Create your account</Text>
      </View>

      <ScrollView
        className=""
        automaticallyAdjustKeyboardInsets
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}
      >
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Full Name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Home Address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.name?.message}
            />
          )}
        />
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
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Phone Number"
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
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirm"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry
              placeholder="Password confirmation"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.passwordConfirm?.message}
            />
          )}
        />

        <Button
          title="Sign Up "
          onPress={handleSubmit(onSubmit)}
          isValidForm={isValid}
        />
        <View className=" flex flex-row justify-between items-center pt-5 pb-5">
          <View>
            <Text>Remember Me</Text>
          </View>
          <View className="flex flex-row  items-center">
            <Text> Have an account? </Text>
            <View>
              <Link href="/(authentication)/signin" asChild>
                <TouchableOpacity>
                  <Text className=" text-blue font-bold"> Login</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
