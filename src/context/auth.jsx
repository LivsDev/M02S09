import React, { createContext, useState, useContext, useEffect } from 'react';

// Criando o contexto de autenticação
const AuthContext = createContext();

// Componente Provider para fornecer o contexto ao restante do app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Função para login (signIn)
  const signIn = async ({ username, password }) => {
    try {
      // Simulação de requisição para a API Dummy
      const response = await fakeApiLogin(username, password);
      if (response) {
        // Salvando os dados do usuário no estado e no localStorage
        setUser(response);
        localStorage.setItem('user', JSON.stringify(response));
      }
    } catch (error) {
      console.error("Erro na autenticação", error);
    }
  };

  // Função para logout (signOut)
  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Restaurar sessão ao carregar o app
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Simulação da API Dummy para login
const fakeApiLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "Livia" && password === "pass") {  // Modifique o nome de usuário e a senha se desejar
        resolve({
          id: 1,
          username: "Livia",
          token: "fake-jwt-token"
        });
      } else {
        reject("Credenciais inválidas");
      }
    }, 1000);
  });
};

// Hook para utilizar o contexto de autenticação
export const useAuth = () => {
  return useContext(AuthContext);
};
