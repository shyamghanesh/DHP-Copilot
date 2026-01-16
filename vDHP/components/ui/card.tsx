import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export function Card({ children }: { children: React.ReactNode }) {
  const background = useThemeColor({}, 'background');
  const border = useThemeColor({ light: '#E2E8F0', dark: '#2B2F36' }, 'background');

  return (
    <ThemedView style={[styles.card, { backgroundColor: background, borderColor: border }]}
    >
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
});
