import * as React from 'react';
import { StyleSheet } from 'react-native';

import NewsList from '../components/news/news-list';
import { View } from '../components/Themed';

export default function News() {
  return (
    <View style={styles.container}>
      <NewsList path="/screens/News.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
