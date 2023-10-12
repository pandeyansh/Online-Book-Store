import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Implement your login logic here
    setUser(userData);
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null);
  };

  return { user, login, logout };
}
