import React from 'react';
import { useAuth } from './context/auth';  // Verifica a autenticação
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { user } = useAuth();  // Verifica se o usuário está autenticado
    return user ? children : <Navigate to="/login" />;  // Redireciona se não estiver autenticado
}

export default PrivateRoute;
