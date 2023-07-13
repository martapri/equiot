import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "Athiti": require("./assets/fonts/Athiti.ttf"),
    });
};