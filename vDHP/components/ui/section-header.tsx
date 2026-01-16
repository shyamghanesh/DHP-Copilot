import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export function SectionHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <View style={styles.row}>
      <ThemedText type="subtitle">{title}</ThemedText>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
