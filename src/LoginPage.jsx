import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from './context/auth';  // Importa o contexto de autenticação
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();  // Usa o método signIn do contexto
    const navigate = useNavigate();  // Usado para redirecionar

    const onSubmit = async (data) => {
        try {
            await signIn({ username: data.username, password: data.password });
            navigate("/dashboard");  // Redireciona para o dashboard após o login
        } catch (error) {
            alert("Erro ao fazer login: " + error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Nome de Usuário:</label>
                <input id="username" {...register('username', { required: "Nome de usuário é obrigatório" })} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input id="password" type="password" {...register('password', { required: "Senha é obrigatória" })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginPage;
