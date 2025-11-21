import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/Logo1-cropped.svg";

import styles from "../styles/screens/page1-1.styles";

export default function Introscreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // chỗ này sau này gắn navigate nếu cần
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Logo width={292} height={219} />
      </View>
      <Text style={styles.text}>PotPan</Text>
    </View>
  );
}
