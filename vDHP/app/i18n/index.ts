import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import { translations } from './translations';

const i18n = new I18n(translations);

i18n.enableFallback = true;
i18n.defaultLocale = 'en';

i18n.locale = Localization.getLocales()[0]?.languageTag ?? 'en';

export const t = (scope: Parameters<typeof i18n.t>[0], options?: Parameters<typeof i18n.t>[1]) =>
  i18n.t(scope, options);

export const getLocale = () => i18n.locale;

export const setLocale = (locale: string) => {
  i18n.locale = locale;
};
