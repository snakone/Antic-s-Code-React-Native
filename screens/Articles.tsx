import * as React from 'react';
import ArticlesList from '../components/articles/articles-list';
import { View } from '../components/Themed';

export default function Articles() {
  return (
    <View>
      <ArticlesList path="/screens/Articles.js"/>
    </View>
  );
}

