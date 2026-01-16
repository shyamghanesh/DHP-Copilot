import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';

export function PrimaryButton({ label, onPress }: { label: string; onPress?: () => void }) {
  const tint = useThemeColor({}, 'tint');

  return (
    <Pressable style={[styles.button, { backgroundColor: tint }]} onPress={onPress}
    >
      <ThemedText style={styles.label}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
});
