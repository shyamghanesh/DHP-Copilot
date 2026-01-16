import { ScrollView, StyleSheet } from 'react-native';

import { t } from '@/app/i18n';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';

export default function RecordUploadScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('upload.title')} />

      <Card>
        <ThemedText>{t('upload.description')}</ThemedText>
        <StatusPill label="HIPAA-ready storage" tone="success" />
        <PrimaryButton label={t('common.upload')} onPress={() => {}} />
      </Card>

      <Card>
        <SectionHeader title="Recent uploads" />
        <ThemedText>Blood Panel Results • 2026-01-10</ThemedText>
        <ThemedText>Chest X-Ray • 2025-12-28</ThemedText>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
});
