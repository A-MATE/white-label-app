import {View, Text, FlatList} from 'react-native';
import React from 'react';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './HomeCarousels.styles';

const newsData = [
  {id: '1', title: 'News 1'},
  {id: '2', title: 'News 2'},
  {id: '3', title: 'News 3'},
];
const matchResultsData = [
  {id: '1', title: 'Match Result 1'},
  {id: '2', title: 'Match Result 2'},
  {id: '3', title: 'Match Result 3'},
];
const mediaPostsData = [
  {id: '1', title: 'Media Post 1'},
  {id: '2', title: 'Media Post 2'},
  {id: '3', title: 'Media Post 3'},
];

const HomeCarousels = () => {
  const styles = useStyle(styleSheet);

  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.carouselItem}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Last News</Text>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      />
      <Text style={styles.sectionTitle}>Last Match Result</Text>
      <FlatList
        data={matchResultsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      />
      <Text style={styles.sectionTitle}>Last Media Post</Text>
      <FlatList
        data={mediaPostsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      />
    </View>
  );
};

export default HomeCarousels;
