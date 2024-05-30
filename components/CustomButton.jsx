import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({ handlePress, title, isLoading }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={handlePress}
      title= {title}
      activeOpacity={0.7}
      className={isPressed ? "bg-blue-700" : "bg-blue-500"}
      disabled={isLoading}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
