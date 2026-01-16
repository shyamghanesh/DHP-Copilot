import { ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { t } from '@/app/i18n';
import { careTeamMessages } from '@/app/services/mock-data';
import { Card } from '@/components/ui/card';
import { ListRow } from '@/components/ui/list-row';
import { SectionHeader } from '@/components/ui/section-header';

export default function MessagesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('messages.title')} />

      <Card>
        {careTeamMessages.map((message) => (
          <Link key={message.id} href="/chat" asChild>
            <ListRow
              title={message.sender}
              subtitle={message.preview}
              rightText={message.time}
              icon="message.fill"
            />
          </Link>
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
});
