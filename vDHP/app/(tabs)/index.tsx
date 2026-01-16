import { ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';
import { StatusPill } from '@/components/ui/status-pill';
import { ListRow } from '@/components/ui/list-row';
import { t } from '@/app/i18n';
import {
  appointments,
  healthTracking,
  notifications,
  patientProfile,
  reminders,
} from '@/app/services/mock-data';

export default function HomeScreen() {
  const nextAppointment = appointments[0];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.header}>
        <View>
          <ThemedText type="title">{t('home.title')}</ThemedText>
          <ThemedText>{t('home.subtitle')}</ThemedText>
        </View>
        <StatusPill label={t('common.sync')} tone="success" />
      </ThemedView>

      <Card>
        <SectionHeader title={t('home.nextVisit')} />
        <ThemedText type="defaultSemiBold">{nextAppointment.doctor}</ThemedText>
        <ThemedText>
          {nextAppointment.date} • {nextAppointment.time} • {nextAppointment.type}
        </ThemedText>
        <ThemedText>{nextAppointment.hospital}</ThemedText>
        <PrimaryButton label={t('common.viewAll')} onPress={() => {}} />
      </Card>

      <Card>
        <SectionHeader title={t('home.reminders')} />
        {reminders.map((reminder) => (
          <ThemedView key={reminder.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{reminder.title}</ThemedText>
              <ThemedText>{reminder.frequency}</ThemedText>
            </View>
            <StatusPill label={reminder.time} tone="warning" />
          </ThemedView>
        ))}
      </Card>

      <Card>
        <SectionHeader title={t('home.healthTracking')} />
        {healthTracking.map((metric) => (
          <ThemedView key={metric.id} style={styles.rowBetween}>
            <View>
              <ThemedText type="defaultSemiBold">{metric.metric}</ThemedText>
              <ThemedText>{metric.value}</ThemedText>
            </View>
            <StatusPill label={metric.trend} tone="success" />
          </ThemedView>
        ))}
      </Card>

      <Card>
        <SectionHeader title={t('home.notifications')} />
        {notifications.map((notification) => (
          <ThemedView key={notification.id} style={styles.rowBetween}>
            <ThemedText style={styles.flex}>{notification.message}</ThemedText>
            <ThemedText style={styles.muted}>{notification.time}</ThemedText>
          </ThemedView>
        ))}
      </Card>

      <Card>
        <SectionHeader title="Quick actions" />
        <Link href="/notifications" asChild>
          <ListRow title="Notifications" subtitle="Appointments, labs, messages" icon="bell.fill" />
        </Link>
        <Link href="/reminders" asChild>
          <ListRow title="Reminders" subtitle="Medicine and follow-ups" icon="pills.fill" />
        </Link>
        <Link href="/health-tracking" asChild>
          <ListRow title="Health tracking" subtitle="Vitals and symptoms" icon="chart.bar.fill" />
        </Link>
        <Link href="/messages" asChild>
          <ListRow title="Care team chat" subtitle="Secure messaging" icon="message.fill" />
        </Link>
        <Link href="/booking" asChild>
          <ListRow title="Book appointment" subtitle="Hospitals and doctors" icon="calendar.badge.clock" />
        </Link>
        <Link href="/record-upload" asChild>
          <ListRow title="Upload records" subtitle="Reports and imaging" icon="doc.text.fill" />
        </Link>
      </Card>

      <Card>
        <SectionHeader title={t('home.dataSharing')} />
        <ThemedText>{patientProfile.primaryHospital}</ThemedText>
        <ThemedText>{patientProfile.carePlan}</ThemedText>
        <StatusPill label={t('common.enabled')} tone="success" />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  muted: {
    opacity: 0.7,
  },
});
