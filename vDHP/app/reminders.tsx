import { ScrollView, StyleSheet, View } from 'react-native';

import { t } from '@/app/i18n';
import { reminders } from '@/app/services/mock-data';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';

export default function RemindersScreen() {
  const medicine = reminders.filter((item) => item.type === 'Medicine');
  const followup = reminders.filter((item) => item.type === 'Follow-up');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader
        title={t('reminders.title')}
        action={<PrimaryButton label={t('reminders.add')} onPress={() => {}} />}
      />

      <Card>
        <SectionHeader title={t('reminders.medicine')} />
        {medicine.map((item) => (
          <View key={item.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
              <ThemedText>{item.frequency}</ThemedText>
            </View>
            <StatusPill label={item.time} tone="warning" />
          </View>
        ))}
      </Card>

      <Card>
        <SectionHeader title={t('reminders.followup')} />
        {followup.map((item) => (
          <View key={item.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
              <ThemedText>{item.frequency}</ThemedText>
            </View>
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
});
