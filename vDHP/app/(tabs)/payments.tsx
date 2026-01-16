import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';
import { t } from '@/app/i18n';
import { payments } from '@/app/services/mock-data';

export default function PaymentsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('payments.title')} />

      <Card>
        <SectionHeader title={t('payments.methods')} />
        <View style={styles.rowBetween}>
          <ThemedText>Visa •••• 4821</ThemedText>
          <PrimaryButton label={t('common.manage')} onPress={() => {}} />
        </View>
      </Card>

      <Card>
        <SectionHeader title={t('payments.packages')} />
        <ThemedText type="defaultSemiBold">Comprehensive Care Package</ThemedText>
        <ThemedText>$199 / month • Includes labs and priority teleconsults</ThemedText>
        <PrimaryButton label={t('common.payNow')} onPress={() => {}} />
      </Card>

      <Card>
        <SectionHeader title={t('payments.invoiceHistory')} />
        {payments.map((payment) => (
          <View key={payment.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{payment.description}</ThemedText>
              <ThemedText>{payment.date}</ThemedText>
            </View>
            <StatusPill
              label={`${payment.amount} • ${payment.status}`}
              tone={payment.status === 'Paid' ? 'success' : 'warning'}
            />
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
