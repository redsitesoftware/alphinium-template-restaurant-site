import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppShell from '../components/AppShell';
import { COLORS } from '../data';

export default function ConfirmationScreen({ navigation, route }) {
  const { date, time, partySize, name, phone } = route.params || {};

  return (
    <AppShell navigation={navigation} activeTab="Booking" scroll={false}>
      <View style={styles.container}>
        <Text style={styles.icon}>OK</Text>
        <Text style={styles.title}>Booking confirmed</Text>
        <Text style={styles.subtitle}>We can’t wait to welcome you to Ember & Oak.</Text>

        <View style={styles.card}>
          <Detail label="Guest" value={name} />
          <Detail label="Date" value={date} />
          <Detail label="Time" value={time} />
          <Detail label="Party" value={partySize} />
          <Detail label="Contact" value={phone} />
        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </Pressable>
      </View>
    </AppShell>
  );
}

function Detail({ label, value }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 44,
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
    gap: 14,
  },
  detailRow: {
    gap: 6,
  },
  detailLabel: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  detailValue: {
    color: COLORS.text,
    fontSize: 16,
  },
  button: {
    marginTop: 24,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    paddingVertical: 16,
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
