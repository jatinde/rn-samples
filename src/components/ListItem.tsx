import { Image, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import type { Profile } from "../../types/Profile";

const ListItem = ({ item }: { item: Profile }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: Platform.OS === "web" ? item.avatar_medium : item.avatar_small,
          }}
        />
      </View>
      <Text
        style={styles.textStyle}
      >{`${item.first_name} ${item.last_name}`}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: Platform.OS === "web" ? 100 : 50,
    height: Platform.OS === "web" ? 100 : 50,
    borderRadius: 100,
  },
  imageContainer: {
    borderColor: "#771176",
    borderRadius: 100,
    borderWidth: 2,
    padding: 4,
  },
  itemContainer: {
    backgroundColor: "#0b7285",
    color: "#f8f9fa",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Platform.OS === "web" ? "40%" : "100%",
    borderBottomColor: "#bac8ff",
    borderBottomWidth: 2,
    marginLeft: Platform.OS === "web" ? 20 : 0,
    padding: Platform.OS === "web" ? 40 : 10,
    shadowColor: "#bac8ff",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: Platform.OS === "web" ? 8 : 0,
    marginTop: Platform.OS === "web" ? 5 : 0,
  },
  textStyle: {
    color: "#f8f9fa",
    fontSize: 22,
    fontWeight: Platform.OS === "web" ? "700" : "300",
  },
});
