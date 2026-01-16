import { ScrollView, StyleSheet, View } from 'react-native';

import { t } from '@/app/i18n';
import { notifications } from '@/app/services/mock-data';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';

export default function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('notifications.title')} />

      <Card>
        <SectionHeader title={t('notifications.realtime')} />
        {notifications.map((item) => (
          <View key={item.id} style={styles.rowBetween}>
            <ThemedText style={styles.flex}>{item.message}</ThemedText>
            <StatusPill label={item.time} tone="neutral" />
          </View>
        ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  flex: {
    flex: 1,
  },
});
