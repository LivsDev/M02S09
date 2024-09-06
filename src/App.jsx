import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import AgeForm from './AgeForm';
import { AuthProvider } from './context/auth';  // Importando o AuthProvider
import PrivateRoute from './PrivateRoute';  // Componente de rota privada
import HomePage from './HomePage';  // Página pública
import LoginPage from './LoginPage';  // Página de login
import DashboardPage from './DashboardPage';  // Página privada

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <h1>Formulários de Cadastro</h1>
                    <Routes>
                        {/* Rota pública */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/age" element={<AgeForm />} />

                        {/* Rota privada */}
                        <Route 
                            path="/dashboard" 
                            element={
                                <PrivateRoute>
                                    <DashboardPage />  {/* Dashboard protegido */}
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
