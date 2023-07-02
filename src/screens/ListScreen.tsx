import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { friends } from "../../data/profiles";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../components/ListItem";
import type { Profile } from "../../types/Profile";
const ListScreen = () => {
  return (
    <View>
      <Text
        style={Platform.OS !== "web" ? styles.textStyle : styles.textStyleWeb}
      >
        Profile List
      </Text>
      <FlatList
        data={friends}
        keyExtractor={(i) => `${i.id}_${i.first_name}`}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: "#0c8599",
    color: "#f8f9fa",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 10,
  },
  textStyleWeb: {
    backgroundColor: "#0c8599",
    color: "#f8f9fa",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 20,
    marginLeft: 20,
    width: "40%",
  },
});
