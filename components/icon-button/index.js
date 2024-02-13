import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, iconStyle, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.rootContainer}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={24} style={iconStyle} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  rootContainer: {
    opacity: 0.7,
  },
});
