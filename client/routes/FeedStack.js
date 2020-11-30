import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SinglePing from "../screens/SinglePing";
import Header from "../components/Header";
import FeedTopTabs from "./FeedTopTabs";

export default function FeedStack({ navigation, route }) {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        name="Feeds"
        component={FeedTopTabs}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} route={route}/>
          ),
        }}
      />
      <Screen name="Single Ping" component={SinglePing} />
    </Navigator>
  );
}
