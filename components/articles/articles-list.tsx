import React from 'react';

import { Text, View } from '../Themed';
import { ArticlesCSS } from './styles/articles-style';

export default function ArticlesList({}: { path: string }) {
  return (
    <View>
      <View style={ArticlesCSS.getStartedContainer}>
        <Text
          style={ArticlesCSS.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
            Articles List
        </Text>
      </View>
    </View>
  );
}

