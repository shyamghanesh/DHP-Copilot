import { ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';
import { t } from '@/app/i18n';
import { appointments, hospitalAvailability } from '@/app/services/mock-data';

export default function AppointmentsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader
        title={t('appointments.title')}
        action={
          <Link href="/booking" asChild>
            <PrimaryButton label={t('appointments.bookAppointment')} />
          </Link>
        }
      />

      <Card>
        <SectionHeader title={t('common.upcoming')} />
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{appointment.doctor}</ThemedText>
              <ThemedText>
                {appointment.date} • {appointment.time}
              </ThemedText>
              <ThemedText>{appointment.hospital}</ThemedText>
            </View>
            <StatusPill
              label={appointment.status}
              tone={appointment.status === 'Confirmed' ? 'success' : 'warning'}
            />
          </View>
        ))}
      </Card>

      <Card>
        <SectionHeader title={t('appointments.availability')} />
        {hospitalAvailability.map((hospital) => (
          <View key={hospital.id} style={styles.block}>
            <ThemedText type="defaultSemiBold">{hospital.name}</ThemedText>
            <ThemedText>{hospital.nextSlot}</ThemedText>
            <ThemedText>{hospital.departments.join(' • ')}</ThemedText>
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
  block: {
    gap: 4,
  },
});
