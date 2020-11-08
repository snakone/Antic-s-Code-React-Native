import { Link } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NewsService } from '../../services/news/news.service';
import { News } from '../../shared/interfaces/interfaces';

import { Text, View } from '../Themed';
import { NewsCSS } from './styles/news-styles';

export default function NewsList(props: any) {

  const [news, setNews] = useState<News[]>([]);
  const srv = new NewsService();

  useEffect(() => {
    srv.get().toPromise().then(res => { setNews(res || []) });
  }, []);

  return (
    <ScrollView>
      {
        news.map(n => {
          return (
          <ListItem onPress={() => click(props)}>
            <Link to="/two">
              <Text>{n.title}</Text>
            </Link>
          </ListItem>) 
        })
      }
    </ScrollView>
  );

  function click(n: News): void {
    console.log(n);
  }
}