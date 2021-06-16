import React from "react";

import { IoWarningOutline } from 'react-icons/io5';

import Header from "../Header";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "./index.css";

const animatedComponents = makeAnimated();

export default function Cadastrar() {
  return (
    <div className="V">
      <Header />
      <div className="Container2">
        <div className="Formulario">
          <form className="Form">
            <h3>Dados do Profissional</h3>

            <label className="Label">
              <titulo>Nome Completo</titulo>
              <input className="Input" type="text" />
            </label>

            <label className="Label">
              <titulo>
                Link da Sua Foto <text>( comece com //http )</text>
              </titulo>
              <input className="Input" name="avatar" />
            </label>

            <label className="Label">
              <titulo>
                Whatsapp <text>( Somente Números )</text>
              </titulo>
              <input className="Input" name="whatsapp" />
            </label>

            <label className="Label">
              <titulo>Biografia</titulo>
              <input className="Input" type="text" />
            </label>

            <h3>Sobre o Atendimento</h3>
            <label className="Label">
              <titulo>Especialidade</titulo>
              <Select
                components={animatedComponents}
                isMulti
                className="Select"
                placeholder="Selecione suas Especialidades"
                name="subject"
                options={[
                  { value: "Artes", label: "Artes" },
                  { value: "Biologia", label: "Biologia" },
                  { value: "Ciências", label: "Ciências" },
                  { value: "Educação física", label: "Educação física" },
                  { value: "Física", label: "Física" },
                  { value: "Geografia", label: "Geografia" },
                  { value: "História", label: "História" },
                  { value: "Matemática", label: "Matemática" },
                  { value: "Português", label: "Português" },
                  { value: "Química", label: "Química" },
                ]}
              />
            </label>
            <label className="Label">
              <titulo>Custo da sua Hora por Atendimento</titulo>
              <input type="cost" className="Input" name="cost" />
            </label>

            <h3>
              Horários Disponíveis
              <button className="Space" type="button">+ Novo horário</button>
            </h3>

            <div className="Horario">
              <label className="Label2">
                <titulo>Dia da Semana</titulo>
                <Select
                  className="Select"
                  components={animatedComponents}
                  isMulti
                  name="dia"
                  placeholder="Selecione o Dia da Semana"
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-feira" },
                    { value: "2", label: "Terça-feira" },
                    { value: "3", label: "Quarta-feira" },
                    { value: "4", label: "Quinta-feira" },
                    { value: "5 ", label: "Sexta-feira" },
                    { value: "6", label: "Sábado" },
                  ]}
                />
              </label>
              <label className="Dates">
                <titulo>Das</titulo>
                <input className="Date" name="Das" type="time" />
              </label>
              <label className="Dates">
                <titulo>Até</titulo>
                <input className="Date" name="Até" type="time" />
              </label>
            </div>

            <div className="Fundo">
            <IoWarningOutline className="Io" color="#00A9B6" size={32}/>
              <p>
                Importante <br />
                Preencha todos os dados
              </p>
              <button className="Salvar" type="submit">Salvar Cadastro</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
