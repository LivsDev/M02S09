import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from './context/auth'; // Certifique-se de que está importando o hook de autenticação corretamente

function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth(); // Desestruturando signIn do useAuth

    const onSubmit = data => {
        signIn({ username: data.name, password: data.password })
            .then(() => {
                alert('Login realizado com sucesso!');
            })
            .catch(error => {
                alert('Erro ao fazer login: ' + error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input id="name" {...register('name', { required: "Nome é obrigatório" })} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Senha:</label>
                <input id="password" type="password" {...register('password', { required: "Senha é obrigatória" })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Registrar</button>
        </form>
    );
}

export default RegisterForm;
