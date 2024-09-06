import React from 'react';
import { useForm } from 'react-hook-form';

function AgeForm() {
    // Configurando o React Hook Form com validação de erros
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Função para enviar os dados
    const onSubmit = (data) => {
        console.log(data);
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Campo Nome */}
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    id="name"
                    {...register('name', { required: "Nome é obrigatório" })} // Validação de campo obrigatório
                />
                {errors.name && <p>{errors.name.message}</p>}  {/* Exibe mensagem de erro */}
            </div>

            {/* Campo E-mail */}
            <div>
                <label htmlFor="email">E-mail:</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', { required: "E-mail é obrigatório", pattern: /^\S+@\S+$/i })} // Validação de email com regex
                />
                {errors.email && <p>{errors.email.message || "Formato de e-mail inválido"}</p>}  {/* Exibe mensagem de erro */}
            </div>

            {/* Campo Idade */}
            <div>
                <label htmlFor="age">Idade:</label>
                <input
                    id="age"
                    type="number"
                    {...register('age', {
                        required: "Idade é obrigatória", 
                        valueAsNumber: true,  // Converte para número
                        min: { value: 18, message: "A idade mínima é 18 anos" } // Validação de idade mínima
                    })}
                />
                {errors.age && <p>{errors.age.message}</p>}  {/* Exibe mensagem de erro */}
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default AgeForm;
