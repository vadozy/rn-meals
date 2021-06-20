import React, { useState } from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     Font.loadAsync({
  //       'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //       'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //     }).then((data) => resolve(data));
  //   }, 5000);
  // });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return <MealsNavigator />;
}
