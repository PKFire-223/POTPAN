import styles from "../styles/screens/page2-3.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/RootNavigator";

import BgImage from "../../assets/images/2-3.png";
import E1 from "../../assets/images/eli1.svg";
import E2 from "../../assets/images/eli2.svg";
import E3 from "../../assets/images/eli3.svg";

type Props = NativeStackScreenProps<RootStackParamList, "Page2-3">;

export default function Page2_3({ navigation }: Props) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={BgImage} style={styles.image} resizeMode="cover">
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0.85)"]}
          style={styles.overlay}
        >
          <View style={styles.header}>
            <Pressable style={styles.backButton} onPress={goBack}>
              <Ionicons name="arrow-back" size={28} color="#fff" />
            </Pressable>
            <Pressable style={[styles.backButton, { opacity: 0 }]}>
              <Ionicons name="arrow-forward" size={28} color="#fff" />
            </Pressable>
          </View>

          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Ionicons name="time-outline" size={16} color="#f97316" />
              <Text style={styles.badgeText}>45 phút</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="flame-outline" size={16} color="#f97316" />
              <Text style={styles.badgeText}>Đậm đà cơm nhà</Text>
            </View>
          </View>

          <View style={styles.titleBlock}>
            <Text style={styles.title}>Cá kho tộ{"\n"}chuẩn vị miền Tây</Text>
            <Text style={styles.subtitle}>
              Thịt cá săn chắc, kho nước màu keo lại, chan với cơm trắng là hết
              nồi.
            </Text>
          </View>

          <View style={styles.chefRow}>
            <E1 width={72} height={72} />
            <View style={styles.chefInfo}>
              <Text style={styles.chefName}>Bếp Himeko</Text>
              <Text style={styles.chefMeta}>Hơn 120 công thức gia đình</Text>
            </View>
          </View>

          <View style={styles.bottomBar}>
            <Pressable style={styles.iconChip}>
              <Ionicons name="bookmark-outline" size={20} color="#f97316" />
            </Pressable>

            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryText}>Xem công thức</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
