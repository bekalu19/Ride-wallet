import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LanguageProvider } from "./src/i18n/LanguageContext";
import { DataProvider } from "./src/context/DataContext";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <DataProvider>
          <StatusBar style="dark" />
          <RootNavigator />
        </DataProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
