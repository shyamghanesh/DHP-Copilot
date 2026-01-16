import { ScrollView, StyleSheet, View } from 'react-native';

import { t } from '@/app/i18n';
import { consents } from '@/app/services/mock-data';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';

export default function ConsentScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('consent.title')} />

      <Card>
        <ThemedText>{t('consent.subtitle')}</ThemedText>
      </Card>

      {consents.map((consent) => (
        <Card key={consent.id}>
          <View style={styles.rowBetween}>
            <View style={styles.flex}>
              <ThemedText type="defaultSemiBold">{consent.name}</ThemedText>
              <ThemedText>Applies to care team and hospital systems.</ThemedText>
            </View>
            <StatusPill
              label={consent.enabled ? t('common.enabled') : t('common.disabled')}
              tone={consent.enabled ? 'success' : 'warning'}
            />
          </View>
          <PrimaryButton label={t('common.manage')} onPress={() => {}} />
        </Card>
      ))}
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
