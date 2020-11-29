import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from "@apollo/client";
import { client } from './ApolloProvider';

import AuthStack from './routes/AuthStack';
import FeedBottomTabs from './routes/FeedBottomTabs';

export default function App() {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {/* <AuthStack /> */}
        <FeedBottomTabs />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

