import Constants from 'expo-constants';

const apiBaseUrl =
  (Constants.expoConfig?.extra?.apiBaseUrl as string | undefined) ??
  process.env.EXPO_PUBLIC_API_BASE_URL ??
  'https://api.digital-health-platform.example.com';

export type ApiResult<T> = {
  data: T | null;
  error: string | null;
};

export const apiRequest = async <T>(path: string, options?: RequestInit): Promise<ApiResult<T>> => {
  try {
    const response = await fetch(`${apiBaseUrl}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers ?? {}),
      },
      ...options,
    });

    if (!response.ok) {
      const message = await response.text();
      return { data: null, error: message || response.statusText };
    }

    return { data: (await response.json()) as T, error: null };
  } catch (error) {
    return { data: null, error: (error as Error).message };
  }
};
