import { ScrollView, StyleSheet, View } from 'react-native';

import { t } from '@/app/i18n';
import { chatThread } from '@/app/services/mock-data';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SectionHeader } from '@/components/ui/section-header';

export default function ChatScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title={t('messages.title')} />

      <Card>
        {chatThread.map((entry) => (
          <View
            key={entry.id}
            style={[
              styles.bubble,
              entry.direction === 'out' ? styles.outgoing : styles.incoming,
            ]}
          >
            <ThemedText type="defaultSemiBold">{entry.sender}</ThemedText>
            <ThemedText>{entry.message}</ThemedText>
            <ThemedText style={styles.time}>{entry.time}</ThemedText>
          </View>
        ))}
      </Card>

      <PrimaryButton label={t('messages.openChat')} onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  bubble: {
    padding: 12,
    borderRadius: 12,
    gap: 4,
  },
  incoming: {
    backgroundColor: '#E2E8F0',
  },
  outgoing: {
    backgroundColor: '#DCFCE7',
    alignSelf: 'flex-end',
  },
  time: {
    opacity: 0.6,
    fontSize: 12,
  },
});
