import React, { useEffect, useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import AppShell from '../components/AppShell';
import { COLORS, dietaryFilters, menuCategories, menuItems } from '../data';

export default function MenuScreen({ navigation, route }) {
  const [selectedCategory, setSelectedCategory] = useState(route.params?.category || 'All');
  const [selectedDietary, setSelectedDietary] = useState('All');

  useEffect(() => {
    if (route.params?.category) {
      setSelectedCategory(route.params.category);
    }
  }, [route.params?.category]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
      const dietaryMatch = selectedDietary === 'All' || item.dietary.includes(selectedDietary);
      return categoryMatch && dietaryMatch;
    });
  }, [selectedCategory, selectedDietary]);

  return (
    <AppShell navigation={navigation} activeTab="Menu">
      <View style={styles.header}>
        <Text style={styles.title}>Seasonal Menu</Text>
        <Text style={styles.subtitle}>From kingfish crudo to pavlova, every plate is designed for long-table dining.</Text>
      </View>

      <View style={styles.filterWrap}>
        <Text style={styles.filterTitle}>Categories</Text>
        <View style={styles.pillRow}>
          {menuCategories.map((category) => {
            const active = category === selectedCategory;
            return (
              <Pressable key={category} onPress={() => setSelectedCategory(category)} style={[styles.pill, active && styles.pillActive]}>
                <Text style={[styles.pillText, active && styles.pillTextActive]}>{category}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.filterWrap}>
        <Text style={styles.filterTitle}>Dietary</Text>
        <View style={styles.pillRow}>
          {dietaryFilters.map((diet) => {
            const active = diet === selectedDietary;
            return (
              <Pressable key={diet} onPress={() => setSelectedDietary(diet)} style={[styles.pill, active && styles.pillActive]}>
                <Text style={[styles.pillText, active && styles.pillTextActive]}>{diet}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.list}>
        {filteredItems.map((item) => (
          <View key={item.id} style={styles.menuCard}>
            <Image source={{ uri: item.image }} style={styles.menuImage} />
            <View style={styles.menuBody}>
              <View style={styles.menuHeader}>
                <Text style={styles.menuName}>{item.name}</Text>
                <Text style={styles.menuPrice}>{item.price}</Text>
              </View>
              <Text style={styles.menuCategory}>{item.category} · {item.dietary.join(' · ') || 'Chef\'s selection'}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: COLORS.muted,
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
  },
  filterWrap: {
    paddingHorizontal: 20,
    marginTop: 22,
  },
  filterTitle: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 1.2,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  pill: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.surface,
  },
  pillActive: {
    backgroundColor: COLORS.primary,
  },
  pillText: {
    color: COLORS.muted,
    fontWeight: '600',
  },
  pillTextActive: {
    color: COLORS.text,
  },
  list: {
    paddingHorizontal: 20,
    marginTop: 24,
    gap: 16,
  },
  menuCard: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  menuImage: {
    width: '100%',
    height: 200,
  },
  menuBody: {
    padding: 18,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  menuName: {
    flex: 1,
    color: COLORS.text,
    fontSize: 19,
    fontWeight: '700',
  },
  menuPrice: {
    color: COLORS.secondary,
    fontSize: 17,
    fontWeight: '700',
  },
  menuCategory: {
    color: COLORS.gold,
    marginTop: 10,
    fontSize: 12,
    fontWeight: '700',
  },
  menuDescription: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
});
