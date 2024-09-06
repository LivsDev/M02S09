import React from 'react';
import { useForm } from 'react-hook-form';

function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input id="name" {...register('name', { required: "Nome é obrigatório" })} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email">E-mail:</label>
                <input id="email" type="email" {...register('email', { required: "E-mail é obrigatório" })} />
                {errors.email && <p>{errors.email.message}</p>}
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