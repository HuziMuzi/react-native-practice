import React from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";

export const Loading = () => {
    return (
      <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Идет загрузка данных...</Text>
      </SafeAreaView>
    );
};

