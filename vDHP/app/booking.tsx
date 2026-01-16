import { ScrollView, StyleSheet, View } from 'react-native';

import { t } from '@/app/i18n';
import { appointmentSlots, doctors, hospitals } from '@/app/services/mock-data';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';

export default function BookingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('booking.title')} />

      <Card>
        <SectionHeader title={t('booking.selectHospital')} />
        {hospitals.map((hospital) => (
          <View key={hospital.id} style={styles.block}>
            <ThemedText type="defaultSemiBold">{hospital.name}</ThemedText>
            <ThemedText>{hospital.address}</ThemedText>
          </View>
        ))}
      </Card>

      <Card>
        <SectionHeader title={t('booking.selectDoctor')} />
        {doctors.map((doctor) => (
          <View key={doctor.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{doctor.name}</ThemedText>
              <ThemedText>
                {doctor.specialty} • {doctor.hospital}
              </ThemedText>
            </View>
            <PrimaryButton label={t('common.book')} onPress={() => {}} />
          </View>
        ))}
      </Card>

      <Card>
        <SectionHeader title={t('booking.selectSlot')} />
        {appointmentSlots.map((slot) => (
          <View key={slot.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{slot.date}</ThemedText>
              <ThemedText>{slot.time}</ThemedText>
            </View>
            <StatusPill label={slot.type} tone="neutral" />
          </View>
        ))}
        <PrimaryButton label={t('common.schedule')} onPress={() => {}} />
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
