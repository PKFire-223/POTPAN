import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RootStackParamList } from "../navigations/RootNavigator";

import CheckIcon from "../../assets/images/check.svg";
import LogoIcon from "../../assets/images/logo.svg";

import styles from "../styles/screens/RegisterSuccessScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "RegisterSuccess">;

const ORANGE = "#FF782C";

const CARD_W = 270;
const CARD_R = 22;
const BADGE = 69;
const INSET_BORDER = 3;

export default function RegisterSuccessScreen({ route, navigation }: Props) {
  const name = route.params?.name ?? "Jane Doe";

  const scale = useRef(new Animated.Value(0.92)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 12,
        bounciness: 10,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 260,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scale, fade]);

  const onClose = () => {
    navigation.goBack();
  };

  const onContinue = () => {
    navigation.navigate("Page1-1");
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.backdrop, { opacity: fade }]}
      />
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.centered}>
          <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
            <View style={styles.logoWrapper}>
              <LogoIcon width={48} height={48} />
            </View>

            <View style={styles.checkWrapper}>
              <CheckIcon width={72} height={72} />
            </View>

            <Text style={styles.title}>Đăng ký thành công</Text>
            <Text style={styles.message}>
              Chào mừng{" "}
              <Text style={styles.highlight}>{name ?? "Người dùng"}</Text> đến
              với PotPan!
            </Text>

            <TouchableWithoutFeedback onPress={onContinue}>
              <View style={styles.primaryBtn}>
                <Text style={styles.primaryText}>Bắt đầu khám phá</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={onClose}>
              <View style={styles.secondaryBtn}>
                <Text style={styles.secondaryText}>Quay lại</Text>
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
