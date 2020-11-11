import { Link } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NewsService } from '../../services/news/news.service';
import { News } from '../../shared/interfaces/interfaces';
import { Text, View } from '../Themed';
import { StyleSheet } from 'react-native';

export default function NewsList({}: { path: string }) {

  const [news, setNews] = useState<News[]>([]);
  const srv = new NewsService();

  useEffect(() => {
    srv.get().toPromise().then(res => { setNews(res || []) });
  }, []);

  return (
    <ScrollView>
      <View>
      {
        news.map(n => {
          return (
          <ListItem onPress={() => click(n)}
                    key={n._id}>
              <Text>{n.title}</Text>
          </ListItem>) 
        })
      }
      </View>
    </ScrollView>
  );
}

function click(n: News): void {
  console.log(n);
}