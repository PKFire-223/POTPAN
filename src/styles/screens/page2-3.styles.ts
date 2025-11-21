import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  image: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 24,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(15,23,42,0.4)",
  },
  badgeRow: {
    flexDirection: "row",
    marginTop: 16,
    columnGap: 8,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(15,23,42,0.7)",
  },
  badgeText: {
    marginLeft: 6,
    color: "#f9fafb",
    fontSize: 12,
  },
  titleBlock: {
    marginTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#e5e7eb",
  },
  chefRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  chefInfo: {
    marginLeft: 12,
  },
  chefName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  chefMeta: {
    fontSize: 13,
    color: "#e5e7eb",
    marginTop: 2,
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },
  iconChip: {
    width: 44,
    height: 44,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(15,23,42,0.8)",
    marginRight: 12,
  },
  primaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 999,
    backgroundColor: "#f97316",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default styles;
