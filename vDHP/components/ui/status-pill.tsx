import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export function StatusPill({ label, tone = 'neutral' }: { label: string; tone?: 'neutral' | 'success' | 'warning' }) {
  const stylesByTone = {
    neutral: { backgroundColor: '#E2E8F0', color: '#0F172A' },
    success: { backgroundColor: '#DCFCE7', color: '#166534' },
    warning: { backgroundColor: '#FEF9C3', color: '#854D0E' },
  } as const;

  const toneStyle = stylesByTone[tone];

  return (
    <View style={[styles.pill, { backgroundColor: toneStyle.backgroundColor }]}
    >
      <ThemedText style={[styles.text, { color: toneStyle.color }]}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});
