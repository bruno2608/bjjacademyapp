<div align="center">
  <img src="https://i.imgur.com/WdGink9.png" alt="Logo do BJJ Academy" width="220" />

  <h1>BJJ Academy 🥋</h1>
  <p>Plataforma de gerenciamento para academias de Jiu-Jitsu Brasileiro.</p>

  <p align="center">
    <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" alt="Status do Projeto" />
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-BJJ--Academy-blueviolet" alt="Licença" /></a>
    <img src="https://img.shields.io/badge/react-18.x-blue" alt="React Version" />
    <img src="https://img.shields.io/badge/Supabase-PostgreSQL-green" alt="Supabase" />
  </p>
</div>

---

## 🖼️ Preview da Interface

- 🧱 **Em Breve**
<img src="https://via.placeholder.com/800x400.png?text=Screenshot+da+Aplicacao+BJJ+Academy" alt="Preview da Aplicação" />

---

## 🚀 Tecnologias

- ⚛️ **React Native** – Interface moderna e responsiva
- 🔐 **Supabase** – Autenticação e banco de dados PostgreSQL
- 📦 **Context API** – Gerenciamento global de autenticação
- 🧱 **Componentização** – Arquitetura organizada com componentes reutilizáveis
- 📁 **Estrutura MVC** – Separação clara entre lógica e visual

---

## 🔐 Funcionalidades Atuais

No momento, o projeto está em fase inicial de desenvolvimento. Já implementamos:

- ✅ **Navbar** (autenticação conectada ao Supabase)
- ✅ **Algumas telas iniciais para testes de UI**

> ⚠️ Nesta versão `v0.0.1`, o foco está na estruturação da base do sistema de autenticação.

---

## 🎯 Objetivos da Versão `v0.0.1`

Nesta fase, estamos trabalhando nas seguintes funcionalidades essenciais:

- [ ] Tela de login
- [ ] Tela de cadastro de usuário (instrutores/alunos)
- [ ] Tela de redefinição de senha
- [ ] Validação de sessão ativa (usuário logado permanece conectado)
- [ ] Página inicial (home) com layout base do perfil do usuário

> 💡 Após a finalização do fluxo de autenticação, iniciaremos a construção da **primeira versão da tela inicial**, que servirá como base para o restante da aplicação.

---

## 🚀 Funcionalidades Futuras (Roadmap)

Estas são funcionalidades planejadas para as próximas versões do projeto:

### 🔧 Funcionalidades Core
- Cadastro e gerenciamento de alunos
- Estrutura de graduações (faixas, categorias etárias e hierarquias)
- Criação e organização de turmas
- Diferenciação de acesso entre instrutor e aluno
- Interface amigável e voltada para a realidade do BJJ

### 🧠 Planejamento de Expansão
- ✅ Painel administrativo com permissões
- 📊 Dashboard com métricas da academia
- 📱 Interface responsiva para mobile
- 🔔 Sistema de notificações (promoções, eventos, vencimentos)

---

## 📦 Stack Utilizada

- **Frontend:** React.js
- **Backend as a Service:** Supabase (PostgreSQL, Auth, Storage)
- **Gerenciamento de estado/contexto:** Context API
- **Estilização:** (futuramente) TailwindCSS / ShadCN UI

---

## 📦 Scripts

```bash
npm install       # Instala as dependências
npm start         # Inicia o app em modo de desenvolvimento
npm test          # Executa os testes automatizados
npm run build     # Cria a build de produção
npm run eject     # Expõe configurações internas (irreversível)
```
---

## 📁 Estrutura de Diretórios

```
BJJACADEMYAPP/
├── .expo/                  # Configurações do Expo
├── .vscode/                # Configurações do VSCode
├── assets/                 # Arquivos estáticos (imagens, fontes, etc)
├── node_modules/           # Dependências do projeto
├── src/                    # Código-fonte principal
│   ├── components/         # Componentes reutilizáveis
│   │   └── Header.js
│   ├── contexts/           # Context API (Gerenciamento de tema, autenticação, etc)
│   │   └── ThemeContext.js
│   ├── hooks/              # Custom Hooks
│   │   └── useThemeColors.js
│   ├── navigation/         # Configurações de navegação
│   │   └── AppNavigator.js
│   ├── screens/            # Telas principais do app
│   │   ├── CheckinScreen.js
│   │   ├── DetailScreen.js
│   │   ├── EvolucaoScreen.js
│   │   ├── HomeScreen.js
│   │   ├── PresencaScreen.js
│   │   └── SettingsScreen.js
│   ├── themes/             # Sistema de temas (cores, estilos)
│   │   └── index.js
├── .gitignore              # Arquivos ignorados pelo Git
├── App.js                  # Ponto de entrada da aplicação
├── app.json                # Configuração do projeto (Expo)
├── index.js                # Entry point (usado para web/native)
├── LICENSE                 # Licença do projeto
├── package.json            # Dependências e scripts do projeto
├── package-lock.json       # Lockfile do npm
├── README.md               # Documentação do projeto
└── yarn.lock               # Lockfile do yarn
```

---

> Projeto em desenvolvimento contínuo. Feedbacks e contribuições são bem-vindos! 👊

---

## 📄 Licença

Este projeto está sob uma licença personalizada de uso privado.  
© 2025 Bruno Alves Franca — Todos os direitos reservados.

Entre em contato para uso comercial ou autorização: [contatobalvesfranca@gmail.com](mailto:contatobalvesfranca@gmail.com)

---

## 👨‍💻 Autor

Feito com 💙 por [Bruno Alves Franca](https://github.com/balvesfranca)  
📸 Instagram: [@balvesfranca](https://instagram.com/balvesfranca)
```