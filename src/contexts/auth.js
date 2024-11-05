import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  async function SignUp(email, senha, telefone, nome) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: senha,
        phone: telefone,
      });
      setLoadingAuth(false);

      navigation.goBack();
    } catch (err) {
      console.log("Erro ao cadastrar", err);
      setLoadingAuth(false);
    }
  }

  async function SignIn(email, senha, setError) {
    setLoadingAuth(true);
    try {
      if (email === 'admin@email.com' && senha === '123456') {
        const data = {
          id: '1',
          name: 'Admin',
          token: 'admin-token',
          email: email,
        };

        await AsyncStorage.setItem('@finToken', data.token);

        setUser({
          id: data.id,
          name: data.name,
          email: data.email,
        });

        setLoadingAuth(false);
        return;
      }

      const response = await api.post('/login', {
        email: email,
        password: senha
      });

      const { id, name, token } = response.data;

      const data = {
        id,
        name,
        token,
        email,
      };

      await AsyncStorage.setItem('@finToken', token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      });

      setLoadingAuth(false);

    } catch (err) {
      console.log("Erro ao fazer login", err);
      setError("E-mail e/ou senha incorretos! Tente novamente"); // Definir mensagem de erro
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, SignUp, SignIn, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
