import { Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { FieldError } from "react-hook-form";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(Text);

interface InputProps {
  errorMessage?: string | FieldError;
  isInvalid?: boolean;
  value?: string;
  placeholder?: string;
}

export function Input({
  errorMessage = undefined,
  isInvalid,
  value,
  placeholder,
  ...rest
}: InputProps) {
  const isInputInvalid = !!errorMessage || isInvalid;
  const isFilled = !!value && !errorMessage;

  const labelPositionY = useSharedValue(0);
  const errorMessagePosition = useSharedValue(0);

  const labelAnimatedStyle = useAnimatedStyle(() => {
    const fontSizeAnimation = interpolate(
      labelPositionY.value,
      [20, -20],
      [16, 12],
      Extrapolate.CLAMP
    );

    return {
      top: labelPositionY.value,
      fontSize: fontSizeAnimation,
    };
  });

  const errorMessageAnimatedStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      errorMessagePosition.value,
      [-10, 0],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      opacity: opacityAnimation,
      transform: [{ translateY: errorMessagePosition.value }],
    };
  });

  useEffect(() => {
    labelPositionY.value = withSpring(value || isFilled ? -20 : 20, {});
  }, [value]);

  useEffect(() => {
    errorMessagePosition.value = withTiming(errorMessage ? 0 : -10, {
      easing: Easing.ease,
    });
  }, [errorMessage]);

  return (
    <View
      style={{
        marginTop: 20,
        borderColor: isInputInvalid ? "red" : "transparent",
      }}
    >
      <AnimatedText className=" absolute left-3" style={labelAnimatedStyle}>{placeholder}</AnimatedText>
      <TextInput
        className={`text-lg h-16 p-2 border rounded-xl placeholder:textc ${
          isFilled ? "border-blue" : " text-black"
        } focus:bg-transparent ${
          isInvalid ? "border-blue" : "focus:border-gray-500"
        } text-black `}
        value={value}
        placeholder={""}
        placeholderTextColor={"#0E315D"}
        {...rest}
      />
      <AnimatedText
        className="text-lg text-blue-700"
        style={errorMessageAnimatedStyle}
      >
        {typeof errorMessage === "string" ? errorMessage : null}
      </AnimatedText>
    </View>
  );
}
