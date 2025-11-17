
# Growact

Growact é a interface web para um sistema gamificado de gerenciamento de objetivos e tarefas, onde cada ação concluída gera progresso, recompensas e engajamento.


![Capa](https://raw.githubusercontent.com/Lucas-Viesan/growact/main/public/assets/Capa.png)


---

## Índice

1. Visão Geral  
2. Tecnologias  
3. Funcionalidades  
4. Como Usar  
5. Instalação  

---

## 1. Visão Geral

O **Growact** foi criado a partir da necessidade de tornar a gestão de metas e tarefas mais motivadora e visual. A ideia é transformar a experiência de planejar e cumprir objetivos em algo envolvente, com progresso visual, recompensas virtuais e um design intuitivo.

---

## 2. Tecnologias

- React (Frontend)  
- TypeScript  
- Vite (build e dev)  
- Tailwind CSS (estilização)  
- React Router DOM (navegação)  
- Axios (para chamadas HTTP)  
- React Query (ou outra para fetch/cache) *(se for o caso)*  
- Context API (ou Redux, dependendo) para estado de autenticação / usuário    

---

## 3. Funcionalidades

- Cadastro e autenticação de usuários  
- Tela de dashboard com visão geral dos objetivos  
- Criação, edição e deleção de objetivos  
- Criação, edição e deleção de tarefas associadas a objetivos  
- Cálculo automático de progresso por objetivo  
- Design responsivo para desktop e mobile  
- Sistema de recompensas conforme o progresso  
 

---

## 4. Como Usar

- Página inicial / Dashboard: visualização dos objetivos e progresso.  
- Página “Novo Objetivo”: formulário para criar um objetivo.  
- Página “Tarefas”: dentro de cada objetivo, gerenciar tarefas (criar, marcar como concluída, editar).  
- Página de perfil / configurações: informações da quantidade de objetivos e tarefas concluidos e pendentes do usuário e o histórico dos objetivos concluidos


![Contra Capa 1](https://raw.githubusercontent.com/Lucas-Viesan/growact/main/public/assets/Contra-Capa-1.png)

![Contra Capa 2](https://raw.githubusercontent.com/Lucas-Viesan/growact/main/public/assets/Contra-Capa-2.png)

---

## 5. Instalação

### Pré-requisitos

- Node.js (versão recomendada: >= 18)  
- npm ou yarn  

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/growact-frontend.git

# Acesse a pasta
cd growact-frontend

# Instale as dependências
npm install
# ou
yarn install

# Rodar em modo de desenvolvimento
npm run dev
# ou
yarn dev
