import React from 'react';
import RegisterForm from './RegisterForm';
import { AuthProvider } from './context/auth'; // Importando o contexto de autenticação

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <h1>Cadastro de Usuários</h1>
                <RegisterForm />
            </div>
        </AuthProvider>
    );
}

export default App;