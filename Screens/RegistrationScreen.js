import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const onRegister = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.registerContainer}>
            <View style={styles.photoContainer}></View>
            <Text style={styles.header}>Registration</Text>
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeybord ? 43 : 100,
              }}
            >
              <View onLayout={onLayoutRootView}>
                <TextInput
                  style={styles.input}
                  value={state.login}
                  placeholder="Login"
                  onFocus={() => setIsShowKeybord(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  value={state.email}
                  placeholder="Email address"
                  onFocus={() => setIsShowKeybord(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  value={state.password}
                  placeholder="Password"
                  secureTextEntry={showPassword}
                  onFocus={() => setIsShowKeybord(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
                <TouchableOpacity
                  onPressIn={() => setShowPassword(false)}
                  onPressOut={() => setShowPassword(true)}
                >
                  <Text style={styles.btnShowPassword}>Show</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={onRegister}
            >
              <Text style={styles.btnTitle}>Register</Text>
            </TouchableOpacity>

            <Text style={styles.text}>
              Do you already have an account? Log in
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "50%",
    justifyContent: "flex-end",
  },
  registerContainer: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
    position: "relative",
  },

  photoContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    left: "47%",
    transform: [{ translateX: -50 }, { translateY: -60 }],
  },

  header: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 32,
    marginTop: 92,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    paddingRight: 16,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },

  btnShowPassword: {
    position: "absolute",
    right: 16,
    top: -34,
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },

  form: {
    marginHorizontal: 16,
  },

  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginHorizontal: 16,
  },

  btnTitle: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },

  text: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 78,
  },
});
