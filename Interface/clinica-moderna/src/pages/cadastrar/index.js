import React from 'react';

import Header from '../../components/Header';

import './index.css';

export default function Cadastrar(){
    return(
        <div className="V">
           <Header />
           <div className="Container2">
            <div className="Formulario">
            <main>
                <form>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <input
                            name="name"
                            label="Nome Completo"
                            
                        />

                        <input
                            name="avatar"
                            label="Avatar"
                            
                        />

                        <input
                            name="whatsapp"
                            label="Whatsapp"
                            
                        />

                        <input
                            name="bio"
                            label="Biografia"
                            
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <select
                            name="subject"
                            label="Matéria"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação física', label: 'Educação física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' }
                            ]}
                        />

                        <input
                            name="cost"
                            label="Custo da sua hora por aula"
                            
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" >
                                + Novo horário
                            </button>
                        </legend>
                                <div className="schedule-item">
                                    <select
                                        name="week_day"
                                        label="Dia da semana"
                                        
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5 ', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />

                                    <input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        
                                    />

                                    <input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        
                                    />
                                </div>
                    </fieldset>

                    <footer>
                        <p>
                            Importante <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
            </div>
           </div>
        </div>
    );
}