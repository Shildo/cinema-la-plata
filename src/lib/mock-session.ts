export type MockSession = {
  firstName: string;
};

const STORAGE_KEY = "cinema-la-plata:mock-session";
export const MOCK_SESSION_EVENT = "cinema-la-plata:mock-session-change";

export function readMockSession(): MockSession | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<MockSession>;
    if (typeof parsed.firstName !== "string" || !parsed.firstName.trim()) return null;

    return { firstName: parsed.firstName.trim() };
  } catch {
    return null;
  }
}

export function saveMockSession(firstName: string): MockSession {
  const session = { firstName: firstName.trim() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(MOCK_SESSION_EVENT));
  return session;
}

export function clearMockSession() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(MOCK_SESSION_EVENT));
}
