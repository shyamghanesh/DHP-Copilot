import AsyncStorage from '@react-native-async-storage/async-storage';

const OFFLINE_CACHE_PREFIX = 'dhp_offline_cache_';

export const cacheData = async <T>(key: string, payload: T) => {
  await AsyncStorage.setItem(`${OFFLINE_CACHE_PREFIX}${key}`, JSON.stringify(payload));
};

export const loadCachedData = async <T>(key: string): Promise<T | null> => {
  const value = await AsyncStorage.getItem(`${OFFLINE_CACHE_PREFIX}${key}`);
  if (!value) {
    return null;
  }
  return JSON.parse(value) as T;
};
