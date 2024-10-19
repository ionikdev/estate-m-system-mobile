import { Feather } from "@expo/vector-icons";
import React, { BaseSyntheticEvent, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useWindowDimensions, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimatedButton = Animated.createAnimatedComponent(View); // Wrap with View component
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedFeather = Animated.createAnimatedComponent(Feather);

interface ButtonProps {
  title: string | React.ReactElement;
  isValidForm?: boolean;
  onPress?: () => void; 
}

export function Button({ title, isValidForm, onPress, ...rest }: ButtonProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const width = useSharedValue(0);

  const widthAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: isValidForm ? width.value : width.value - 80,
      borderRadius: withSpring(isValidForm ? SCREEN_WIDTH / 3: 5),
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isValidForm ? 0 : 1),
      transform: [{ translateX: withSpring(isValidForm ? -100 : 0) }],
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      opacity: withTiming(isValidForm ? 1 : 0),
      transform: [{ translateX: withSpring(isValidForm ? 5
        : 100) }],
    };
  });

  useEffect(() => {
    width.value = withSpring(isValidForm ? SCREEN_WIDTH / 4 : SCREEN_WIDTH, {});
  }, [isValidForm]);

  return (
    <TouchableOpacity onPress={onPress} {...rest}>
    <AnimatedButton
      className={`h-16 bg-blue mt-8 flex items-center justify-center`}
      {...rest}
      style={widthAnimatedStyle}
    >
      <AnimatedText
        className="text-white text-xl font-bold"
        style={textAnimationStyle}
      >
        {title}
      </AnimatedText>
      <AnimatedFeather
        name="check"
        size={30}
        color={"#ffffff"}
        style={arrowAnimationStyle}
      />
    </AnimatedButton>
    </TouchableOpacity>
    
  );
}
