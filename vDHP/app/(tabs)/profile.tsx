import { ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';
import { t } from '@/app/i18n';
import { consents, patientProfile } from '@/app/services/mock-data';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('profile.title')} />

      <Card>
        <SectionHeader title={t('profile.profile')} action={<PrimaryButton label={t('common.edit')} onPress={() => {}} />} />
        <ThemedText type="defaultSemiBold">{patientProfile.name}</ThemedText>
        <ThemedText>Age {patientProfile.age} • Blood type {patientProfile.bloodType}</ThemedText>
        <ThemedText>{patientProfile.primaryHospital}</ThemedText>
        <ThemedText>{patientProfile.carePlan}</ThemedText>
      </Card>

      <Card>
        <SectionHeader title={t('profile.consents')} />
        {consents.map((consent) => (
          <View key={consent.id} style={styles.rowBetween}>
            <ThemedText>{consent.name}</ThemedText>
            <StatusPill label={consent.enabled ? t('common.enabled') : t('common.disabled')} tone={consent.enabled ? 'success' : 'warning'} />
          </View>
        ))}
        <Link href="/consent" asChild>
          <PrimaryButton label={t('common.manage')} />
        </Link>
      </Card>

      <Card>
        <SectionHeader title={t('profile.security')} />
        <ThemedText>Multi-factor authentication enabled</ThemedText>
        <ThemedText>Biometric login active</ThemedText>
      </Card>

      <Card>
        <SectionHeader title={t('profile.language')} />
        <ThemedText>English (US)</ThemedText>
        <PrimaryButton label={t('common.manage')} onPress={() => {}} />
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
