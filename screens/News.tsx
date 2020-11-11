import * as React from 'react';

import NewsList from '../components/news/news-list';
import { View } from '../components/Themed';

export default function News() {
  return (
    <View>
      <NewsList path="/screens/News.js" />
    </View>
  );
}
