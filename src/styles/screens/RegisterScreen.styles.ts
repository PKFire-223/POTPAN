import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 8, paddingHorizontal: 16 },
  title: {
    fontSize: 44,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 10,
    color: "#4B4B4B",
    justifyContent: "center",
    fontStyle: "normal",
    marginTop: 8,
  },
  form: { flex: 1 },
  label: {
    fontSize: 24,
    marginBottom: 10,
    color: "#4B4B4B",
    fontWeight: "800",
  },
  inputWrapper: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  input: {
    fontSize: 18,
    fontWeight: "500",
  },
  pwdWrapper: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  textHolder: {
    fontSize: 18,
    fontWeight: "500",
  },
  eyeBtn: {
    position: "absolute",
    right: 12,
    top: 11,
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: { paddingTop: 8, paddingBottom: 28 },
  termsText: {
    fontSize: 14,
    textAlign: "center",
    color: "#4B4B4B",
  },
  submitBtn: {
    backgroundColor: "#FF782C",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  submitText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "800",
  },
  bottomText: {
    marginTop: 10,
    alignSelf: "center",
    color: "#4B4B4B",
    fontSize: 18,
  },
  link: { color: "#1C37CF", fontWeight: "800" },
});

export default styles;
