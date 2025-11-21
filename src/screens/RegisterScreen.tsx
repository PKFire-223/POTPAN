import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Linking,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../navigations/RootNavigator";

import styles from "../styles/screens/RegisterScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const ORANGE = "#FF782C";
const PEACH = "#FFE3D1";
const PWD_PLACEHOLDER = "●".repeat(10);

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = () => {
    const fallbackName = name?.trim() || "Jane Doe";
    navigation.navigate("RegisterSuccess", { name: fallbackName });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding" })}
      >
        <View style={styles.container}>
          <Text style={styles.title}>ĐĂNG KÝ</Text>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 16 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.form}>
              <Text style={styles.label}>Họ tên</Text>
              <Input
                style={styles.textHolder}
                placeholder="Jane Doe"
                value={name}
                onChangeText={setName}
              />

              <Text style={styles.label}>Email</Text>
              <Input
                style={styles.textHolder}
                placeholder="exam..."
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              <Text style={styles.label}>Số điện thoại</Text>
              <Input
                style={styles.textHolder}
                placeholder="0900 000 000"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />

              <Text style={styles.label}>Mật khẩu</Text>
              <PasswordInput
                style={styles.textHolder}
                placeholder={PWD_PLACEHOLDER}
                value={pwd}
                onChangeText={setPwd}
                visible={showPwd}
                onToggleVisible={() => setShowPwd((v) => !v)}
              />

              <Text style={styles.label}>Nhập lại mật khẩu</Text>
              <PasswordInput
                style={styles.textHolder}
                placeholder={PWD_PLACEHOLDER}
                value={confirmPwd}
                onChangeText={setConfirmPwd}
                visible={showConfirm}
                onToggleVisible={() => setShowConfirm((v) => !v)}
              />
            </View>

            <View style={styles.footer}>
              <Text style={styles.termsText}>
                Bằng việc tiếp tục, bạn đồng ý với{" "}
                <Text
                  style={styles.link}
                  onPress={() => Linking.openURL("https://example.com/terms")}
                >
                  Điều khoản dịch vụ
                </Text>{" "}
                và{" "}
                <Text
                  style={styles.link}
                  onPress={() => Linking.openURL("https://example.com/privacy")}
                >
                  Chính sách bảo mật
                </Text>
                .
              </Text>
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
              <Text style={styles.submitText}>Đăng ký</Text>
            </TouchableOpacity>

            <Text style={styles.bottomText}>
              Đã có tài khoản?{" "}
              <Text
                style={styles.link}
                onPress={() => {
                  // chỗ này sau này gắn navigate sang màn Login
                }}
              >
                Đăng nhập
              </Text>
            </Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/** Input text thường */
const Input = ({
  style,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  autoCapitalize,
}: {
  style?: any;
  placeholder?: string;
  value: string;
  onChangeText: (t: string) => void;
  keyboardType?: "default" | "phone-pad" | "email-address";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}) => (
  <View style={styles.inputWrapper}>
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      placeholderTextColor="#9CA3AF"
    />
  </View>
);

/** Input mật khẩu có icon con mắt */
const PasswordInput = ({
  style,
  placeholder,
  value,
  onChangeText,
  visible,
  onToggleVisible,
}: {
  style?: any;
  placeholder?: string;
  value: string;
  onChangeText: (t: string) => void;
  visible: boolean;
  onToggleVisible: () => void;
}) => (
  <View style={styles.pwdWrapper}>
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#9CA3AF"
      secureTextEntry={!visible}
    />
    <TouchableOpacity style={styles.eyeBtn} onPress={onToggleVisible}>
      <Ionicons
        name={visible ? "eye" : "eye-off"}
        size={20}
        color="#ffffffff"
      />
    </TouchableOpacity>
  </View>
);
