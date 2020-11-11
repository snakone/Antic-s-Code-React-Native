import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

export default function ScrollComponent(props: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { marginHorizontal: Layout.margin.small }
});