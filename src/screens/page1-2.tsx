import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import SVG
import BgImage from "../../assets/images/banhmi.svg";
import Logo from "../../assets/images/L3.svg";
import AgImage from "../../assets/images/thit_kho.svg";

const { width: W, height: H } = Dimensions.get("window");
const TOP_H = Math.round(H * 0.5);
const BOT_H = H - TOP_H + 10;

import styles from "../styles/screens/page1-2.styles";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Phần trên: background hình ảnh */}
      <View style={styles.topContainer}>
        <BgImage width={W} height={TOP_H} />
        <View style={styles.logoContainer}>
          <Logo width={120} height={120} />
        </View>
      </View>

      {/* Phần dưới: nền trắng bo tròn với nội dung */}
      <View style={styles.bottomContainer}>
        {/* Tiêu đề và mô tả */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Khám phá công thức</Text>
          <Text style={styles.subtitle}>
            Hàng trăm món ăn gia đình Việt với hướng dẫn chi tiết, dễ làm.
          </Text>
        </View>

        {/* Thẻ công thức gợi ý */}
        <View style={styles.featureContainer}>
          <AgImage width={80} height={80} />
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>Gợi ý thực đơn</Text>
            <Text style={styles.featureDescription}>
              Món ngon mỗi ngày theo khẩu vị của bạn.
            </Text>
          </View>
        </View>

        {/* Nút bên dưới */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startText}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
