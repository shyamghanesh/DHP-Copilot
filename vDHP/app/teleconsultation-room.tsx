import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';
import { t } from '@/app/i18n';

export default function TeleconsultationRoomScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('telehealth.title')} />

      <Card>
        <ThemedText type="defaultSemiBold">Dr. J. Ramirez</ThemedText>
        <ThemedText>Video consultation • 10:30 AM</ThemedText>
        <StatusPill label="Waiting room" tone="neutral" />
      </Card>

      <Card>
        <SectionHeader title="Controls" />
        <View style={styles.actions}>
          <PrimaryButton label="Mute" onPress={() => {}} />
          <PrimaryButton label="Camera" onPress={() => {}} />
          <PrimaryButton label="Share report" onPress={() => {}} />
          <PrimaryButton label={t('common.close')} onPress={() => {}} />
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
