import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AppShell from '../components/AppShell';
import { bookingDates, COLORS, partySizes, timeSlots } from '../data';

function SelectionGroup({ label, options, selected, onSelect }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupTitle}>{label}</Text>
      <View style={styles.choiceWrap}>
        {options.map((option) => {
          const active = selected === option;
          return (
            <Pressable key={option} onPress={() => onSelect(option)} style={[styles.choice, active && styles.choiceActive]}>
              <Text style={[styles.choiceText, active && styles.choiceTextActive]}>{option}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function BookingScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(bookingDates[0].label);
  const [selectedTime, setSelectedTime] = useState(timeSlots[2]);
  const [partySize, setPartySize] = useState(partySizes[1]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const selectedDateFull = useMemo(() => bookingDates.find((date) => date.label === selectedDate)?.full || selectedDate, [selectedDate]);

  const handleReserve = () => {
    navigation.navigate('Confirmation', {
      date: selectedDateFull,
      time: selectedTime,
      partySize,
      name: name || 'Guest',
      phone: phone || '(02) 0000 0000',
    });
  };

  return (
    <AppShell navigation={navigation} activeTab="Booking">
      <View style={styles.header}>
        <Text style={styles.title}>Reserve your table</Text>
        <Text style={styles.subtitle}>Choose your ideal evening and we’ll have your table prepared.</Text>
      </View>

      <View style={styles.group}>
        <Text style={styles.groupTitle}>Date</Text>
        <View style={styles.choiceWrap}>
          {bookingDates.map((date) => {
            const active = selectedDate === date.label;
            return (
              <Pressable key={date.id} onPress={() => setSelectedDate(date.label)} style={[styles.choice, active && styles.choiceActive]}>
                <Text style={[styles.choiceText, active && styles.choiceTextActive]}>{date.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <SelectionGroup label="Time" options={timeSlots} selected={selectedTime} onSelect={setSelectedTime} />
      <SelectionGroup label="Party size" options={partySizes} selected={partySize} onSelect={setPartySize} />

      <View style={styles.group}>
        <Text style={styles.groupTitle}>Guest details</Text>
        <TextInput placeholder="Your name" placeholderTextColor={COLORS.muted} value={name} onChangeText={setName} style={styles.input} />
        <TextInput placeholder="Phone number" placeholderTextColor={COLORS.muted} value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
      </View>

      <Pressable style={styles.reserveButton} onPress={handleReserve}>
        <Text style={styles.reserveText}>Reserve Table</Text>
      </Pressable>
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
  },
  group: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  groupTitle: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 1.2,
  },
  choiceWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  choice: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  choiceActive: {
    backgroundColor: COLORS.primary,
  },
  choiceText: {
    color: COLORS.muted,
    fontWeight: '600',
  },
  choiceTextActive: {
    color: COLORS.text,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 15,
    color: COLORS.text,
    fontSize: 15,
    marginBottom: 12,
  },
  reserveButton: {
    marginHorizontal: 20,
    marginTop: 28,
    backgroundColor: COLORS.secondary,
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
  },
  reserveText: {
    color: COLORS.background,
    fontWeight: '800',
    fontSize: 16,
  },
});
