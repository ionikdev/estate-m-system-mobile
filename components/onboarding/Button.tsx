import {
  Dimensions,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { router } from "expo-router";
import Spinner from "@/utils/Spinner";
import { Feather } from "@expo/vector-icons";

type Props = {
  currentIndex: Animated.SharedValue<number>;
  length: number;
  flatListRef: any;
};
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedFeather = Animated.createAnimatedComponent(Feather);
const { width, height } = Dimensions.get("window");

const Button = ({ currentIndex, length, flatListRef }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const rnBtnStyle = useAnimatedStyle(() => {
    return {
      width:
        currentIndex.value === length - 1 ? withSpring(140) : withSpring(60),
      height: 60,
    };
  }, [currentIndex, length]);

  const rnTextStyle = useAnimatedStyle(() => {
    return {
      opacity:
        currentIndex.value === length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value === length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [currentIndex, length]);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        currentIndex.value !== length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value !== length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [currentIndex, length]);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        currentIndex.value !== length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value !== length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [currentIndex, length]);

  const loadingStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isLoading ? 1 : 0),
    };
  });

  // const onPress = useCallback(() => {
  //   setIsLoading(true);
  //   if (currentIndex.value === length - 1) {
  //     router.push('/(tabs)');
  //     return;
  //   } else {
  //     flatListRef?.current?.scrollToIndex({
  //       index: currentIndex.value + 1,
  //     });
  //   }
  // }, []);
  const onPress = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (currentIndex.value === length - 1) {
        router.push("/signin");
        // router.push('/(authentication)');
      } else {
        flatListRef?.current?.scrollToIndex({
          index: currentIndex.value + 1,
        });
      }
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimatedPressable style={[styles.container, rnBtnStyle]} onPress={onPress}>
      <Animated.Text style={[styles.textStyle, rnTextStyle]}>
        {isLoading ? <Spinner /> : "Get Started"}
      </Animated.Text>
      <AnimatedFeather
        name="arrow-right"
        size={24}
        color={"#ffffff"}
        style={[styles.imageStyle, imageAnimatedStyle]}
      />
      {/* </AnimatedButton>
          <Animated.Image
          source={require('../../assets/image2.png')}
          style={[styles.imageStyle, imageAnimatedStyle]}
          /> */}
      <Animated.View style={[styles.loadingOverlay, loadingStyle]}>
        <Spinner />
      </Animated.View>
    </AnimatedPressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#304FFE",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: 3,
  },
  textStyle: {
    color: "white",
    position: "absolute",
    fontWeight: "600",
    fontSize: 16,
  },
  imageStyle: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,

    alignItems: "center",
    justifyContent: "center",
    zIndex: 999, // Set a higher z-index value
  },
});
