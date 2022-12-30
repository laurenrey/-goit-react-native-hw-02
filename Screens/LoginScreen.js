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
  email: "",
  password: "",
};

export const LoginScreen = () => {
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

  const onLogin = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ ...styles.container, marginTop: "65%" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.loginContainer}>
            <Text style={{ ...styles.header, marginTop: 32 }}>Login</Text>

            <View
              onLayout={onLayoutRootView}
              style={{
                ...styles.form,
                marginBottom: isShowKeybord ? 43 : 100,
              }}
            >
              <TextInput
                style={styles.input}
                value={state.email}
                placeholder="Email address"
                onFocus={() => setIsShowKeybord(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
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
              onPress={onLogin}
            >
              <Text style={styles.btnTitle}>Login</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.text, marginBottom: 144 }}>
              Don't have account yet? Register
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
