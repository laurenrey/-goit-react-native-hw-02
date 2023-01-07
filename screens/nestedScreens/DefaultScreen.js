import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, Button } from "react-native";

export const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log("posts", posts);

  const renderItem = ({ item }) => (
    <View
      style={{
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={{ uri: item.photo }} style={{ width: 350, height: 200 }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={renderItem}
      />
      <Button title="Map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="Comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
