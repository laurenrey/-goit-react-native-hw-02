import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  registerContainer: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
  },

  loginContainer: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
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
  },
});
