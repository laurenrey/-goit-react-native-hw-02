import {
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
import { styles } from "../src/screens.styles";

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
      <View style={{ ...styles.container, marginTop: "50%" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={{ ...styles.registerContainer, position: "relative" }}>
            <View style={styles.photoContainer}></View>
            <Text style={{ ...styles.header, marginTop: 92 }}>
              Registration
            </Text>
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

            <Text style={{ ...styles.text, marginBottom: 78 }}>
              Do you already have an account? Log in
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
