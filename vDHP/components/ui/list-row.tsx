import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';

export function ListRow({
  title,
  subtitle,
  rightText,
  icon,
  onPress,
}: {
  title: string;
  subtitle?: string;
  rightText?: string;
  icon?: React.ComponentProps<typeof IconSymbol>['name'];
  onPress?: () => void;
}) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      {icon ? (
        <View style={styles.icon}>
          <IconSymbol name={icon} size={18} color="#0A7EA4" />
        </View>
      ) : null}
      <View style={styles.body}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        {subtitle ? <ThemedText>{subtitle}</ThemedText> : null}
      </View>
      {rightText ? <ThemedText style={styles.right}>{rightText}</ThemedText> : null}
      <IconSymbol name="chevron.right" size={18} color="#9BA1A6" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    gap: 2,
  },
  right: {
    opacity: 0.7,
  },
});
