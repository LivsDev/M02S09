import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Função de login
    const signIn = async ({ username, password }) => {
        try {
            const response = await fakeApiLogin(username, password);
            if (response) {
                setUser(response);
                localStorage.setItem('user', JSON.stringify(response));
            }
        } catch (error) {
            console.error("Erro na autenticação", error);
        }
    };

    // Função de logout
    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

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

const fakeApiLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password === "pass") {
                resolve({
                    id: 1,
                    username: "user",
                    token: "fake-jwt-token"
                });
            } else {
                reject("Credenciais inválidas");
            }
        }, 1000);
    });
};

export const useAuth = () => {
    return useContext(AuthContext);
};
