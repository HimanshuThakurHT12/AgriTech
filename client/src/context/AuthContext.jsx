import React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import api from '../services/api.js';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem('agritech_user')); } catch { return null; } });
  async function login(email, password) { const { data } = await api.post('/auth/login', { email, password }); localStorage.setItem('agritech_token', data.token); localStorage.setItem('agritech_user', JSON.stringify(data.user)); setUser(data.user); return data.user; }
  async function register(values) { const { data } = await api.post('/auth/register', values); localStorage.setItem('agritech_token', data.token); localStorage.setItem('agritech_user', JSON.stringify(data.user)); setUser(data.user); return data.user; }
  function logout() { localStorage.removeItem('agritech_token'); localStorage.removeItem('agritech_user'); setUser(null); }
  const value = useMemo(() => ({ user, login, register, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
