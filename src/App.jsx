import React from 'react';
import RegisterForm from './RegisterForm';
import AgeForm from './AgeForm';
import { AuthProvider } from './context/auth'; // Importando o AuthProvider

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <h1>Formulários de Cadastro</h1>

                <div style={{ marginBottom: '20px' }}>
                    <h2>Formulário de Registro</h2>
                    <RegisterForm />
                </div>

                <div>
                    <h2>Formulário com Validação de Idade</h2>
                    <AgeForm />
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;

