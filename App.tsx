import React from "react";
import { StatusBar, View } from "react-native";
import { HomeScreen } from "./screens/Home";
import { FullPostScreen } from "./screens/FullPost";

export const App = () => {
  return (
    <View>
      <HomeScreen/>
      {/*<FullPostScreen/>*/}
      <StatusBar />
    </View>
  );
};
