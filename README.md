
# 📋 Secretaria Virtual - Frontend

Frontend do sistema de Secretaria Virtual desenvolvido para facilitar o agendamento, pagamento e registro de prontuários para psicólogos e outros profissionais de saúde. Este projeto utiliza React para fornecer uma interface de usuário intuitiva e moderna.

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Configuração e Execução](#-configuração-e-execução)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Execução do Projeto](#execução-do-projeto)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Licença](#-licença)

---

## 🔎 Sobre o Projeto

A **Secretaria Virtual** é um sistema voltado para psicólogos e profissionais de saúde que necessitam de uma plataforma organizada para agendamento, prontuários e pagamentos. Este frontend fornece uma interface de usuário responsiva e interativa para o sistema.

## 🚀 Funcionalidades

- **Autenticação de Usuário**: Login e registro seguro de usuários.
- **Dashboard**: Acesso centralizado às funcionalidades principais.
- **Perfil do Usuário**: Exibição e atualização dos dados do usuário.
- **Agendamento de Consultas**: Visualização de um calendário com a possibilidade de selecionar e reservar horários disponíveis.
- **Registro de Prontuários**: Consulta e inserção de informações no prontuário dos pacientes.
- **Gerenciamento de Pagamentos**: Visualização do histórico de pagamentos, incluindo método de pagamento e valores.

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface de usuário.
- **React Router**: Gerenciamento de rotas para navegação entre as páginas.
- **Axios**: Realização de requisições HTTP para o backend.
- **React Big Calendar**: Componente de calendário para visualização e reserva de horários.
- **React Datepicker**: Seletor de datas e horários para agendamentos.
- **CSS Customizado**: Estilização do aplicativo com um foco em cores suaves e aparência acolhedora, ideal para o ambiente de psicologia.

## ⚙️ Configuração e Execução

### Requisitos

- Node.js
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/lucaspco/SecretariaVirtual-Frontend.git
   cd SecretariaVirtual-Frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Execução do Projeto

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

2. Abra o navegador e acesse `http://localhost:3000`.

## 📂 Estrutura do Projeto

- `src/`
  - `components/`: Componentes reutilizáveis, como botões e formulários.
  - `pages/`: Páginas principais, incluindo Login, Registro, Dashboard, Perfil, Agendamentos, e Pagamentos.
  - `services/`: Serviços de API para gerenciar requisições HTTP.
  - `App.css`: Estilos globais do aplicativo.
  - `App.js`: Configuração das rotas principais do aplicativo.

## 📄 Licença

Este projeto está sob a licença MIT.
