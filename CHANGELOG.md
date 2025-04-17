# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.8](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.7...v1.0.8) (2025-04-16)

#### ✨ Funcionalidades
- Logout funcional com remoção do usuário (`AsyncStorage`) e redirecionamento via `navigationRef.resetRoot`
- Botão "Sair da Conta" na tela de configurações integrado ao contexto de usuário
- Tela `SettingsScreen` com alternância de tema e suporte ao modo escuro/claro

#### 🛠 Melhorias técnicas
- Atualização para `jwt-decode@4.x` com `jwtDecode.jwtDecode()` ajustado
- Correção do uso incorreto de `useUsuario` para `useUserContext` na tela de configurações
- Ordem de rotas ajustada no `AppNavigator` para abrir em `MainTabs` se autenticado
- Proteção na tela `SuccessScreen` para evitar travamento sem `nextScreen`

#### 🐛 Correções
- Corrigido travamento no login por causa de importação incorreta do `jwt-decode`
- Corrigido bug ao abrir o app e cair direto na tela de sucesso (ordem de rotas ajustada)


### [1.0.7](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.6...v1.0.7) (2025-04-15)

#### ✨ Funcionalidades
- Tela de cadastro com código de convite, validação e sucesso
- `SuccessScreen` agora interpreta `reset: true` para redirecionar com `resetTo()`
- Tela de Login agora retorna corretamente para `Welcome`
- Tela de Cadastro agora retorna corretamente para `Welcome`
- Navegação 100% fluida com histórico limpo em fluxos de login/cadastro
- Animações centralizadas para reuso (Lottie)
- Logs de cadastro e login mais detalhados
- Toasts de erro e sucesso integrados ao fluxo
- Correção de travamentos e mensagens duplicadas

#### 🛠 Melhorias técnicas
- Estrutura de `.env` e `.env.prod` configurada para produção
- Tela `SuccessScreen` corrigida para não sobrescrever contexto
- Ajustes de CORS no backend para permitir login via app mobile/web
- Logs detalhados (`console.log`) para debug no mobile
- Inclusão da tela `Success` no `AppNavigator` (resolvendo erro de rota)
- Tratamento de erros com feedback visual claro

### [1.0.6](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.5...v1.0.6) (2025-04-12)

#### ✨ Funcionalidades
- Integração completa do login com a nova API NestJS (JWT)
- Redirecionamento pós-login com tela `SuccessScreen`
- Toast de erro funcional e adaptado para mobile/web (`react-native-toast-message`)
- Context API com `setUsuario` funcionando após autenticação
- Navegação global com `navigationRef` + `resetTo()`
- Tab bar exibida corretamente após login

#### 🛠 Melhorias técnicas
- Estrutura de `.env` e `.env.prod` configurada para produção
- Tela `SuccessScreen` corrigida para não sobrescrever contexto
- Ajustes de CORS no backend para permitir login via app mobile/web
- Logs detalhados (`console.log`) para debug no mobile
- Inclusão da tela `Success` no `AppNavigator` (resolvendo erro de rota)
- Tratamento de erros com feedback visual claro

#### 🐛 Correções
- Corrigido uso incorreto de `setUser` (substituído por `setUsuario`)
- Corrigido erro ao fazer login no mobile que não mostrava toast
- Corrigido comportamento da `SuccessScreen` que sobrescrevia o usuário autenticado
- Corrigido reset de rota falhando quando `Success` não existia

### [1.0.5](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.4...v1.0.5) (2025-04-09)

### [1.0.4](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.3...v1.0.4) (2025-04-08)

### [1.0.3](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.2...v1.0.3) (2025-04-08)

### [1.0.2](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.1...v1.0.2) (2025-04-08)

### 1.0.1 (2025-04-08)
