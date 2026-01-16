import { ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { t } from '@/app/i18n';
import { records as mockRecords } from '@/app/services/mock-data';
import { cacheData, loadCachedData } from '@/app/services/offline';

export default function RecordsScreen() {
  const [records, setRecords] = useState(mockRecords);

  useEffect(() => {
    const syncRecords = async () => {
      const cached = await loadCachedData<typeof mockRecords>('records');
      if (cached) {
        setRecords(cached);
      }
      await cacheData('records', mockRecords);
    };

    syncRecords();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader
        title={t('records.title')}
        action={
          <Link href="/record-upload" asChild>
            <PrimaryButton label={t('records.uploadRecord')} />
          </Link>
        }
      />

      <Card>
        <ThemedText>{t('records.subtitle')}</ThemedText>
      </Card>

      {records.map((record) => (
        <Card key={record.id}>
          <View style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{record.title}</ThemedText>
              <ThemedText>{record.type}</ThemedText>
              <ThemedText>{record.date}</ThemedText>
            </View>
            <PrimaryButton label={t('common.share')} onPress={() => {}} />
          </View>
          <ThemedText>
            {t('records.sharedWith')}: {record.sharedWith.join(', ')}
          </ThemedText>
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
});
