import { ScrollView, StyleSheet, View } from 'react-native';

import { t } from '@/app/i18n';
import { symptomLog, treatmentProgress, vitalsLog } from '@/app/services/mock-data';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';

export default function HealthTrackingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('tracking.title')} />

      <Card>
        <SectionHeader title={t('tracking.vitals')} action={<PrimaryButton label={t('tracking.addVital')} onPress={() => {}} />} />
        {vitalsLog.map((vital) => (
          <View key={vital.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{vital.metric}</ThemedText>
              <ThemedText>{vital.value}</ThemedText>
            </View>
            <StatusPill label={vital.date} tone="neutral" />
          </View>
        ))}
      </Card>

      <Card>
        <SectionHeader title={t('tracking.symptoms')} action={<PrimaryButton label={t('tracking.addSymptom')} onPress={() => {}} />} />
        {symptomLog.map((symptom) => (
          <View key={symptom.id} style={styles.rowBetween}>
            <ThemedText style={styles.flex}>{symptom.description}</ThemedText>
            <StatusPill label={symptom.date} tone="warning" />
          </View>
        ))}
      </Card>

      <Card>
        <SectionHeader title={t('tracking.progress')} />
        {treatmentProgress.map((plan) => (
          <View key={plan.id} style={styles.block}>
            <ThemedText type="defaultSemiBold">{plan.title}</ThemedText>
            <ThemedText>{plan.notes}</ThemedText>
            <StatusPill label={plan.status} tone={plan.status === 'On track' ? 'success' : 'warning'} />
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
  block: {
    gap: 6,
  },
});
