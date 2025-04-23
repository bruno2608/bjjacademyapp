<div align="center">
  <img src="https://i.imgur.com/WdGink9.png" alt="Logo do BJJ Academy" width="220" />

  <h1>BJJ Academy 🥋</h1>
  <p>Plataforma de gerenciamento para academias de Jiu-Jitsu Brasileiro.</p>

  <p align="center">
    <img src="https://img.shields.io/badge/status-estável-green" alt="Status do Projeto" />
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-BJJ--Academy-blueviolet" alt="Licença" /></a>
    <img src="https://img.shields.io/badge/react-18.x-blue" alt="React Version" />
    <img src="https://img.shields.io/badge/Supabase-PostgreSQL-green" alt="Supabase" />
  </p>
</div>

---

## 🖼️ Preview da Interface

<div align="center">
<img src="https://i.imgur.com/YIITDzG.png" width="800" />
<p align="center">
<p>Em Evolução</p>
</div>

---

## 🚀 Tecnologias

- ⚛️ **React Native** – Interface moderna e responsiva
- 🔐 **Supabase** – Autenticação e banco de dados PostgreSQL
- 📦 **Context API** – Gerenciamento global de autenticação
- 🧱 **Componentização** – Arquitetura organizada com componentes reutilizáveis
- 📁 **Estrutura MVC** – Separação clara entre lógica e visual

---

## ✅ Versão Atual: `1.3.0`

### Mudanças principais na `v1.3.0`:

- Validação visual com bordas vermelhas em campos obrigatórios (Login e Cadastro)
- Feedback direto nos inputs em vez de apenas toast
- Checkbox de aceite dos termos com `Ionicons` (removido `@react-native-community/checkbox`)
- Correções de contraste nos textos: “Ao continuar...” e “Já tem uma conta?”
- Eliminação do uso de `colors` dentro de `StyleSheet.create`
- Preparado para compatibilidade com Bridgeless Mode do React Native 0.77+

---

## 🔐 Funcionalidades Atuais

Estas são as funcionalidades já implementadas até a versão `v1.0.8`:

- ✅ Login via API com JWT, animação e redirecionamento com `resetTo`
- ✅ Cadastro com código de convite e retorno automático ao login
- ✅ Tela de sucesso reutilizável com animação e controle de destino
- ✅ Contexto global persistente com `AsyncStorage`
- ✅ Logout funcional com reset automático para o AuthStack
- ✅ Navegação global via `navigationRef`
- ✅ Toasts de erro e sucesso com feedback visual elegante
- ✅ Tela de configurações com troca de tema (escuro/claro) e logout
- ✅ Estrutura modular com `AuthStack`, `MainTabs` e `AppNavigator`

## 🚀 Próximos passos

- Upload de foto (perfil/capa) com Supabase Storage
- Graduação real via backend
- Tela "Mais" com funções administrativas
- Melhorias de acessibilidade (a11y)

---

## 🚀 Funcionalidades Futuras (Roadmap)

Estas são funcionalidades planejadas para as próximas versões do projeto:

### 🔧 Funcionalidades Core
- Cadastro e gerenciamento de alunos
- Estrutura de graduações (faixas, categorias etárias e hierarquias)
- Criação e organização de turmas
- Diferenciação de acesso entre instrutor e aluno
- Interface amigável e voltada para a realidade do BJJ
- Upload de avatar e edição de perfil
- Presença, Check-in, Evolução e Graduação

### 🧠 Planejamento de Expansão
- ✅ Painel administrativo com permissões
- 📊 Dashboard com métricas da academia
- 📱 Integração de QR Code no check-in
- 🔔 Sistema de notificações (promoções, eventos, vencimentos)

---

## 📦 Stack Utilizada

- **Frontend:** React Native com Expo
- **Backend:** NestJS + PostgreSQL (via Supabase)
- **Gerenciamento de estado/contexto:** Context API
- **Estilização:** Tema dinâmico (dark mode padrão)
- **Autenticação:** JWT + Toast + Lottie

---

## 📦 Scripts

```bash
npm install       # Instala dependências
npx expo start    # Inicia o projeto via Expo
```

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