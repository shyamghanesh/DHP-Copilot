# Digital Health Platform - Patient Mobile App

Production-ready patient mobile experience built with Expo React Native. The app connects patients with hospitals and doctors through secure cloud APIs, supports appointments, teleconsultations, health records, reminders, payments, and consent-based data sharing.

## Features
- Patient profile management and consent controls
- Appointment booking with real-time availability
- Teleconsultations (video, audio, chat)
- Electronic health records (upload, view, share)
- Notifications, medicine reminders, follow-up reminders
- Vitals logging and treatment progress tracking
- Payments and invoice history
- Multilingual UI support and offline access to synced records

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## API integration
Set the API base URL in `app.json` or by using `EXPO_PUBLIC_API_BASE_URL`.

The backend reference implementation lives in [backend/README.md](../backend/README.md).

## Offline support
The Records screen caches synced data for offline access using AsyncStorage.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
