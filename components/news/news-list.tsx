import React, { useEffect, useState } from 'react';

import { Text, View } from '../Themed';
import { NewsCSS } from './styles/news-styles';

export default function NewsList({}: { path: string }) {

  const [news, setNews] = useState([]);

  useEffect(() => {

  });

  return (
    <View>
      <View style={NewsCSS.getStartedContainer}>
        <Text
          style={NewsCSS.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
            News List
        </Text>
      </View>
    </View>
  );
}