import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppShell from '../components/AppShell';
import { COLORS, featuredDishes, heroImage, quickInfo } from '../data';

export default function HomeScreen({ navigation }) {
  return (
    <AppShell navigation={navigation} activeTab="Home">
      <Image source={{ uri: heroImage }} style={styles.heroImage} />
      <View style={styles.heroOverlay}>
        <Text style={styles.eyebrow}>EMBER & OAK · MODERN AUSTRALIAN</Text>
        <Text style={styles.title}>Fine dining by the harbour, framed by fire and seasonality.</Text>
        <Text style={styles.body}>
          Signature tasting menus, polished service and warm interiors built for celebrations.
        </Text>
        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Booking')}>
          <Text style={styles.primaryButtonText}>Book a Table</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured dishes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
          {featuredDishes.slice(0, 4).map((item) => (
            <Pressable key={item.id} style={styles.card} onPress={() => navigation.navigate('Menu', { category: item.category })}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardText}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plan your evening</Text>
        <View style={styles.infoGrid}>
          {quickInfo.map((info) => (
            <View key={info.label} style={styles.infoCard}>
              <Text style={styles.infoLabel}>{info.label}</Text>
              <Text style={styles.infoValue}>{info.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    width: '100%',
    height: 310,
  },
  heroOverlay: {
    marginTop: -90,
    marginHorizontal: 20,
    backgroundColor: 'rgba(27, 11, 6, 0.92)',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  eyebrow: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
    marginBottom: 10,
  },
  title: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },
  body: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 24,
    marginTop: 12,
    marginBottom: 20,
  },
  primaryButton: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  primaryButtonText: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 15,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 28,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  row: {
    paddingRight: 20,
  },
  card: {
    width: 250,
    marginRight: 16,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardImage: {
    width: '100%',
    height: 170,
  },
  cardBody: {
    padding: 16,
    gap: 8,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
  },
  cardText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
  },
  price: {
    color: COLORS.secondary,
    fontSize: 15,
    fontWeight: '700',
  },
  infoGrid: {
    gap: 14,
  },
  infoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoLabel: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  infoValue: {
    color: COLORS.text,
    fontSize: 16,
    lineHeight: 22,
  },
});
