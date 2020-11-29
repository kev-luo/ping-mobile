import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import Feed from '../screens/FeedDummy';
import SinglePing from '../screens/SinglePing';
import { useAuthContext } from '../utils/useAuthContext';

export default function FeedStack() {
  const {Navigator, Screen} = createStackNavigator();
  const { logout } = useAuthContext();

  return (
    <Navigator >
      <Screen name="Feed" component={Feed} options={{headerRight: () => (<Button onPress={logout} title="Logout" />)}} />
      <Screen name="Single Ping" component={SinglePing} />
    </Navigator>
  )
}
