import React, { useEffect, useState } from 'react';
import { View, Text } from '../Themed';
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { ArticlesService } from '../../services/articles/articles.service';
import { Article } from '../../shared/interfaces/interfaces';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

const srv = new ArticlesService();
const colorScheme = useColorScheme();

export default function ArticlesList({}: { path: string }) {

  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    loadMore();
  }, []);

  return (
      <SafeAreaView style={styles.container}>
        {
          loadingMore ? 
          <ActivityIndicator size={50} 
                             style={styles.loader}>
          </ActivityIndicator> : null
        }
        <FlatList style={styles.scroll} 
                  data={articles}
                  onEndReachedThreshold={0.1}
                  scrollEventThrottle={250}
                  keyExtractor={(item) => "item_" + item._id}
                  onEndReached={_ => loadMore()}
                  renderItem={({item, index}) => (
              <ListItem onPress={() => click(item)}
                        key={item._id}
                        bottomDivider={(index + 1) === articles.length ? false : true}>
                <Avatar source={{ 
                  uri: require(`../../assets/images/categories/${item.category}.png`) }} 
                  avatarStyle={{width: 28, height: 28}} />
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>
                    <Text>{item.title}</Text>
                  </ListItem.Title>
                  <ListItem.Subtitle style={{ marginTop: 4}}>
                    {item.category}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color={Colors[colorScheme].tabIconDefault} />
              </ListItem>)
            }>
        </FlatList>
      </SafeAreaView>
  );

  function click(a: Article): void {
    console.log(a);
  }

  function loadMore() {
    if (loadingMore || allLoaded) return;
    setLoadingMore(true);
    setPage(page + 1);
    srv.get(page).toPromise().then(res => { 
      if (res?.length === 0) {
        setAllLoaded(true);
      } else if (res) {
        setArticles([...articles, ...res] || []);
      }
      setLoadingMore(false);
    });
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { 
    flex: 1,
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 14, 
    paddingEnd: 35, 
    lineHeight: 16
  },
  loader: {
    position: 'absolute', 
    flex: 1, 
    zIndex: 5, 
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
    backgroundColor: 'black'
  }
});



