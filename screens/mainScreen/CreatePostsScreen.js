import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Camera } from "expo-camera";

import { TouchableOpacity } from "react-native-gesture-handler";

import * as Location from "expo-location";

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
      console.log("location", location);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity style={styles.sendBtn} onPress={sendPhoto}>
          <Text style={styles.sendLabel}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  camera: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  snap: {
    color: "#ffffff",
  },
  snapContainer: {
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  sendBtn: {
    color: "red",
    height: 51,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
  },
});
