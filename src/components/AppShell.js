import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../data';

const tabs = [
  { label: 'Home', route: 'Home' },
  { label: 'Menu', route: 'Menu' },
  { label: 'Book', route: 'Booking' },
  { label: 'About', route: 'About' },
];

export default function AppShell({ navigation, activeTab, children, scroll = true }) {
  const content = scroll ? <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView> : <View style={styles.content}>{children}</View>;

  return (
    <SafeAreaView style={styles.safeArea}>
      {content}
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const active = activeTab === tab.route;
          return (
            <Pressable key={tab.route} onPress={() => navigation.navigate(tab.route)} style={[styles.tabButton, active && styles.tabButtonActive]}>
              <Text style={[styles.tabText, active && styles.tabTextActive]}>{tab.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: 120,
  },
  tabBar: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.surface,
    gap: 8,
  },
  tabButton: {
    flex: 1,
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: '600',
  },
  tabTextActive: {
    color: COLORS.text,
  },
});
