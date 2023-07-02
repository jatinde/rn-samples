import React from "react";
import { Text, StyleSheet, View, Button, Platform } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.text}>Home Screen</Text>
      <View
        style={
          Platform.OS === "web"
            ? styles.buttonContainerWeb
            : styles.buttonContainer
        }
      >
        <Button
          style={Platform.OS === "web" && styles.buttonStyleWeb}
          onPress={() => navigation.navigate("Components")}
          title="Go to Components Screen"
        />
        <Button
          onPress={() => navigation.navigate("List")}
          title="Go to List Demo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  homeContainer: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    height: "100%",
    transform: [{ translateY: -200 }],
  },
  buttonContainer: {
    gap: 20,
  },
  buttonContainerWeb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  buttonStyleWeb: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});

export default HomeScreen;
