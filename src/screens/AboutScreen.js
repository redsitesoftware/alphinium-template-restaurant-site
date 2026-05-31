import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppShell from '../components/AppShell';
import { aboutHighlights, COLORS, heroImage } from '../data';

export default function AboutScreen({ navigation }) {
  return (
    <AppShell navigation={navigation} activeTab="About">
      <Image source={{ uri: heroImage }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>About Ember & Oak</Text>
        <Text style={styles.body}>
          A refined Sydney dining room celebrating Australian produce through live-fire cooking, polished hospitality and a cellar built for discovery.
        </Text>
        {aboutHighlights.map((item) => (
          <View key={item} style={styles.highlightCard}>
            <Text style={styles.highlightText}>• {item}</Text>
          </View>
        ))}
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 280,
  },
  container: {
    padding: 20,
    gap: 14,
  },
  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '700',
  },
  body: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 23,
  },
  highlightCard: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
  },
  highlightText: {
    color: COLORS.text,
    fontSize: 15,
    lineHeight: 22,
  },
});
