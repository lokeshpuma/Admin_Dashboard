const SESSION_KEY = "session"

function hasWindow() {
  return typeof window !== "undefined"
}

export function hasSession(): boolean {
  if (!hasWindow()) return false
  return !!localStorage.getItem(SESSION_KEY)
}

export async function signIn(_email: string, _password: string) {
  if (!hasWindow()) return { success: false }
  localStorage.setItem(SESSION_KEY, "mock_session_token")
  return { success: true }
}

export async function registerUser(
  _username: string,
  _email: string,
  _password: string
) {
  return {
    success: true,
    user: {
      id: "user_" + Math.random().toString(36).substring(2, 9),
      username: _username,
      email: _email,
    },
  }
}

export async function signOut() {
  if (!hasWindow()) return { success: false }
  localStorage.removeItem(SESSION_KEY)
  return { success: true }
}
