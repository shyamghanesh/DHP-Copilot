import { ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { t } from '@/app/i18n';
import { teleconsultations } from '@/app/services/mock-data';

export default function TelehealthScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('telehealth.title')} />

      <Card>
        <SectionHeader title={t('telehealth.upcomingSessions')} />
        {teleconsultations.map((session) => (
          <View key={session.id} style={styles.session}>
            <View>
              <ThemedText type="defaultSemiBold">{session.doctor}</ThemedText>
              <ThemedText>
                {session.date} • {session.time}
              </ThemedText>
              <ThemedText>{session.mode}</ThemedText>
            </View>
            <View style={styles.actions}>
              <Link href="/teleconsultation-room" asChild>
                <PrimaryButton label={t('telehealth.startVideo')} />
              </Link>
              <Link href="/teleconsultation-room" asChild>
                <PrimaryButton label={t('telehealth.startAudio')} />
              </Link>
              <Link href="/chat" asChild>
                <PrimaryButton label={t('telehealth.openChat')} />
              </Link>
            </View>
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
  session: {
    gap: 12,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
