# 📋 Planejamento de Continuação — BJJ Academy App

## ✅ Revisão de Telas Existentes

| Tela                  | Revisar o quê                                              | Situação           |
|-----------------------|------------------------------------------------------------|--------------------|
| `WelcomeScreen`       | OK (tema, animação, navegação)                             | ✅ Finalizada      |
| `LoginScreen`         | Revisado com validações e tema                             | ✅ Finalizada      |
| `CadastroScreen`      | Revisado com aceite de termos, validações                  | ✅ Finalizada      |
| `ForgotPasswordScreen`| Com fundo animado, botão azul, ícone voltar e layout fixo  | ✅ Finalizada      |
| `SuccessScreen`       | Corrigido com dark mode e reset                            | ✅ Finalizada      |
| `HomeScreen`          | Adaptar conteúdo por perfil (aluno/instrutor/professor)    | ⚠️ Reavaliar       |
| `CheckinScreen`       | Verificar dark mode e lógica de presença                   | ⚠️ Testar          |
| `EvolucaoScreen`      | Validar faixas, progressão, tema e histórico               | ⚠️ Ajustes visuais |
| `SettingsScreen`      | Adicionar botão para mudar tema manualmente                | ⏳ Em aberto       |
| `MaisScreen`          | Criar estrutura inicial com cards/funções por perfil       | ❌ Não iniciada    |

---

## 🧩 Funcionalidades Planejadas

### 🔐 Autenticação e Segurança

- [x] Tela `Esqueci minha senha` com campo de e-mail
- [ ] Tela de verificação de código (OTP)
- [ ] Tela para criação de nova senha
- [ ] Integração futura com login via Google (botão já visível)
- [ ] Confirmação de e-mail (futuro)

---

### 🥋 Funcionalidades por Perfil

#### Para Alunos
- [ ] Evolução: barra de progresso, faixa atual, histórico
- [ ] Check-in manual com visual de aulas do dia

#### Para Professores
- [ ] Visualizar e aprovar graduações
- [ ] Ver aniversariantes da semana
- [ ] Estatísticas por turma

---

## 🌐 Infraestrutura/API

- [ ] Documentar e finalizar endpoints:
  - `/graduacoes`
  - `/presencas`
  - `/aulas/hoje`
- [ ] Swagger completo
- [ ] Upload de avatar via Supabase Storage

---

## 🚀 Produção

- [ ] Deploy da API (Render ou VPS)
- [ ] Domínio próprio para a API
- [ ] Preparar build com EAS (Android/iOS)
