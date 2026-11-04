export type MockSession = {
  firstName: string;
  lastName?: string;
  email?: string;
};

export type MockProfile = {
  firstName: string;
  lastName: string;
  email: string;
};

const STORAGE_KEY = "cinema-la-plata:mock-session";
const PROFILE_KEY = "cinema-la-plata:mock-profile";
export const MOCK_SESSION_EVENT = "cinema-la-plata:mock-session-change";

export function readMockSession(): MockSession | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<MockSession>;
    if (typeof parsed.firstName !== "string" || !parsed.firstName.trim()) return null;

    return {
      firstName: parsed.firstName.trim(),
      lastName: typeof parsed.lastName === "string" ? parsed.lastName.trim() : undefined,
      email: typeof parsed.email === "string" ? parsed.email.trim() : undefined,
    };
  } catch {
    return null;
  }
}

export function readMockProfile(email: string): MockProfile | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(PROFILE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<MockProfile>;
    if (
      typeof parsed.firstName !== "string" ||
      typeof parsed.lastName !== "string" ||
      typeof parsed.email !== "string" ||
      parsed.email.toLowerCase() !== email.trim().toLowerCase()
    ) {
      return null;
    }

    return {
      firstName: parsed.firstName.trim(),
      lastName: parsed.lastName.trim(),
      email: parsed.email.trim(),
    };
  } catch {
    return null;
  }
}

export function saveMockProfile(profile: MockProfile): void {
  const normalizedProfile = {
    firstName: profile.firstName.trim(),
    lastName: profile.lastName.trim(),
    email: profile.email.trim(),
  };
  window.localStorage.setItem(PROFILE_KEY, JSON.stringify(normalizedProfile));
}

export function saveMockSession(sessionData: MockSession): MockSession {
  const session = {
    firstName: sessionData.firstName.trim(),
    lastName: sessionData.lastName?.trim(),
    email: sessionData.email?.trim(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(MOCK_SESSION_EVENT));
  return session;
}

export function clearMockSession() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(MOCK_SESSION_EVENT));
}
