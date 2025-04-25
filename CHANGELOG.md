# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.4.0] (2025-04-24)

#### 🔐 Fluxo de recuperação de senha completo
- Nova tela `ForgotPasswordScreen` com simulação de envio de código
- Tela `VerifyCodeScreen` com campos OTP manuais e visual moderno
- `NewPasswordScreen` com checklist de senha, animação e sucesso
- Redirecionamento com `SuccessScreen` reutilizável e visual animado

#### 🧍 Cadastro pós-registro
- Criada tela `ProfileSetupScreen` para dados complementares (telefone, faixa, grau, etc.)
- Campos validados com uso de `Picker` e integração futura com backend
- Preparada para alimentar a tela de Evolução do aluno

#### 🧭 Navegação
- Navegação entre todas as telas com `navigationRef.reset()` ou `.navigate()`
- Ajustes nas rotas do `AuthStack` para suporte ao novo fluxo

#### 🧪 Telas afetadas:
- `LoginScreen`, `CadastroScreen`, `SuccessScreen`, `ForgotPasswordScreen`, `VerifyCodeScreen`, `NewPasswordScreen`, `ProfileSetupScreen`

### [1.3.1](https://github.com/bruno2608/bjjacademyapp/compare/v1.2.0...v1.3.1) (2025-04-23)

#### ✨ Funcionalidades e melhorias visuais
- Tema escuro ativado por padrão em todas as telas principais
- Corrigida tela `SuccessScreen` com suporte dinâmico ao tema
- Textos, inputs e botões atualizados para contraste ideal
- Novo `ThemeContext` com `colors.text`, `colors.background`, `colors.primary`
- Ajuste visual nas telas de login e cadastro com validação direta nos campos

#### 🧭 Navegação
- Navegação global com `navigationRef.resetTo()` validada em login e cadastro
- Retorno automático à tela de login após cadastro via tela de sucesso
- Estrutura de animação de fundo aplicada com Lottie (versão leve `star_glow.json`)

#### 🔐 Validações e UX
- Checkbox de aceite dos termos agora é obrigatório no cadastro
- Campos inválidos (senha, confirmação, email) com borda vermelha
- Toasts de erro exibidos com `react-native-toast-message`
- Inclusão de campo "confirmar senha" e botão "mostrar senha" nos dois inputs
- Separador visual `"--- ou ---"` melhorado com contraste e alinhamento

#### 🧪 Estrutura
- Telas ajustadas: `WelcomeScreen`, `LoginScreen`, `CadastroScreen`, `SuccessScreen`
- Refatoração da estrutura de contexto e navegação
- Versão `expo` atualizada e instalação do novo CLI


### [1.3.0](https://github.com/bruno2608/bjjacademyapp/compare/v1.2.0...v1.3.0) (2025-04-22)

#### ✨ Validação visual aprimorada
- Aplicada validação visual com **bordas vermelhas em campos obrigatórios** nas telas de Cadastro e Login
- Erros de campos agora são destacados diretamente nos inputs, sem dependência exclusiva de toasts

#### 🛠️ Refatoração de temas
- Todos os estilos de `colors.text`, `colors.card`, etc. migrados para **uso inline no JSX**
- Eliminação total de referências dinâmicas dentro do `StyleSheet.create`, evitando erros em `Bridgeless Mode`
- Estilo unificado para `dividerText`, checkbox e links com base no tema ativo

#### 🔐 Checkbox e aceite de termos
- Campo de aceite dos **Termos de Uso** com validação visual obrigatória no cadastro
- Link dinâmico e clicável para os termos hospedado via Supabase

#### 🧼 Acessibilidade e contraste
- Melhorado contraste dos textos **“Ao continuar…”** e **“Já tem uma conta?”**
- Corrigido alinhamento vertical e visual do checkbox com o texto

### [1.2.0](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.10...v1.2.0) (2025-04-20)

#### ✨ Melhorias visuais
- Ajustado `paddingHorizontal` global via `AppLayout` (`16` → `4`) para visual mais justo e moderno
- Resolvido espaço em branco entre conteúdo e `MainTabs` (`borderTopWidth: 0`)
- Responsividade lateral refinada para todos os blocos da `HomeScreen`
- Aplicado visual padrão com TabBar azul clara `#4dabf7`

#### 🧭 Navegação
- Criado `HomeStack.js` e integrado à `MainTabs` para manter a `TabBar` visível ao navegar
- Adicionada navegação entre `HomeScreen` e `GraduacoesDoDiaScreen` mantendo histórico e estrutura limpa
- Corrigido erro de scroll duplo removendo `ScrollView` e `ScreenContainer` onde necessário

#### 🧩 Componentização e organização
- Isolado componente `GraduacoesLista.js` com `FlatList` reutilizável
- Refatorado `AppLayout` com prop `scrollable` e estrutura padronizada
- Eliminado uso redundante de `ScreenContainer.js` nas telas que usam `AppLayout`

#### 🧠 UX e performance
- Corrigido erro de `VirtualizedList aninhada`
- Melhorado uso de ícones com múltiplos conjuntos (`Ionicons`, `MaterialCommunityIcons`) sem warnings
- Aplicado tema escuro padrão com fundo sólido e contrastes ajustados

### [1.0.10](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.9...v1.0.10) (2025-04-16)

#### 🛠 Melhorias técnicas
- Melhorias na questão do ocultar o ScrollView

### [1.0.9](https://github.com/bruno2608/bjjacademyapp/compare/v1.0.8...v1.0.9) (2025-04-16)

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
