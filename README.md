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

Estas são as funcionalidades já implementadas até a versão `v1.0.2`:

- ✅ **Tela de Login** funcional com Supabase
- ✅ **Animação de sucesso** após login (Lottie)
- ✅ **Controle de sessão** com Context API (`setUsuario`)
- ✅ **Redirecionamento inteligente** com `navigationRef`
- ✅ **Toast de erro** com `react-native-toast-message`
- ✅ **Logout funcional** com `resetTo('AuthStack')`
- ✅ **Tab Bar visível** após autenticação (`MainTabs`)
- ✅ **Modo escuro aplicado** por padrão (dark mode)
- ✅ **Botão de visibilidade de senha** com ícone customizado

> 🧪 O fluxo de autenticação está estável e pronto para evoluir com cadastro e permissões.

---

## 🎯 Objetivos da Versão `v1.0.2`

- ✅ Tela de login integrada com Supabase
- ❌ Tela de cadastro de usuário (instrutores/alunos)
- ❌ Tela de redefinição de senha
- ✅ Validação de sessão ativa (controle via Context API)
- ✅ Página inicial (home) com base do perfil do usuário

> 💡 O foco desta versão foi estabilizar o fluxo de login e logout, garantir a navegação entre stacks e preparar para futura integração com uma API própria.

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