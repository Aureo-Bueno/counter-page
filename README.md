# 🎯 Contador React + Redux Toolkit + Styled Components

Um projeto de exemplo prático demonstrando as melhores práticas de desenvolvimento React em 2025, com foco em arquitetura escalável, tipagem TypeScript robusta e estilização moderna.

---

## 📋 Sobre o Projeto

Este é um aplicativo de **contador simples mas profissional** que serve como referência para estruturação de projetos React modernos. O projeto ilustra:

- ✅ Gerenciamento de estado com **Redux Toolkit** (padrão oficial 2025)
- ✅ Estilização com **styled-components** e Theme Provider
- ✅ **TypeScript** com tipagem completa (sem `any`)
- ✅ Reset global de estilos com `createGlobalStyle`
- ✅ Arquitetura escalável e bem organizada
- ✅ Dark theme moderno e responsivo

### O que o app faz?

Um contador que permite:
- **Incrementar** o valor clicando no botão "Incremento"
- **Decrementar** o valor clicando no botão "Decremento"
- Estado gerenciado globalmente via Redux Toolkit
- Interface elegante com animações suaves

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 18+ | Biblioteca UI |
| **TypeScript** | 5+ | Tipagem estática |
| **Redux Toolkit** | 1.9+ | Gerenciamento de estado |
| **styled-components** | 6+ | Estilização CSS-in-JS |
| **Vite** | 5+ | Bundler e dev server |
| **Node.js** | 22+ | Runtime |
| **Yarn** | 4+ | Package manager |

---

## 📦 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** ≥ 22.0.0 - [Instalar](https://nodejs.org/en/)
- **Yarn** ≥ 4.0.0 - [Instalar](https://yarnpkg.com/getting-started/install)

Verifique as versões:

```bash
node --version   # v22.x.x
yarn --version   # 4.x.x
```

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Aureo-Bueno/counter-page
cd counter-page
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Inicie o servidor de desenvolvimento

```bash
yarn dev
```

A aplicação abrirá automaticamente em:
```
http://localhost:8080
```

### 4. (Opcional) Build para produção

```bash
yarn build
```

O output será gerado em `dist/`

---

## 📁 Estrutura do Projeto

```
contador-redux-styled/
│
├── src/
│   ├── main.tsx              # Entry point com ThemeProvider e Redux Provider
│   ├── App.tsx               # Componente principal
│   │
│   ├── store.ts              # Configuração Redux Toolkit
│   │
│   ├── reducers/
│   │   └── root.ts           # Reducer tipado com TypeScript
│   │
│   ├── theme/
│   │   └── theme.ts          # Definição do tema (cores, fontes, espaçamento)
│   │
│   └── styles/
│       ├── GlobalStyle.ts    # Reset CSS global com createGlobalStyle
│       └── AppStyles.ts      # Componentes estilizados da aplicação
│
├── index.html                # HTML raiz
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração TypeScript
├── vite.config.ts            # Configuração Vite
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Este arquivo
```

---

## 🎨 Arquitetura de Estilização

### Theme Provider

O tema é centralizado em `theme/theme.ts` com tokens de design:

```typescript
{
  colors: { primary, secondary, danger, ... },
  fonts: { family, sizes, weight },
  spacing: { xs, sm, md, lg, xl, ... },
  borderRadius: { sm, md, lg, xl, full },
  shadows: { sm, md, lg, xl },
  transitions: { fast, normal, slow }
}
```

### Acesso ao tema em qualquer componente

```typescript
const MyComponent = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;
```

---

## 🔴 Redux Toolkit com TypeScript

### Reducer tipado (`reducers/root.ts`)

```typescript
export interface CounterState {
  counter: number;
}

export type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" };

const initialState: CounterState = { counter: 0 };

export const rootReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
```

### Store configurado (`store.ts`)

```typescript
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Por que Redux Toolkit?

- ✅ Oficial desde 2022 para substituir `createStore`
- ✅ Suporte nativo a TypeScript
- ✅ Middleware de imutabilidade integrado
- ✅ DevTools automáticas
- ✅ Menos boilerplate que Redux clássico

---

## 📱 Componentes Estilizados

### App.tsx

```typescript
import { useSelector, useDispatch } from "react-redux";
import {
  AppContainer,
  HeaderContent,
  CounterDisplay,
  ButtonsContainer,
  StyledButton,
} from "./styles/AppStyles";

function App() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <AppContainer>
      <HeaderContent>
        <CounterDisplay>
          Contador: <span>{counter}</span>
        </CounterDisplay>
        <ButtonsContainer>
          <StyledButton
            variant="primary"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            + Incremento
          </StyledButton>
          <StyledButton
            variant="secondary"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            - Decremento
          </StyledButton>
        </ButtonsContainer>
      </HeaderContent>
    </AppContainer>
  );
}

export default App;
```

---

## 📦 Instalação de Dependências

O projeto já inclui todas as dependências necessárias. Se precisar instalar manualmente:

```bash
# Core
yarn add react react-dom
yarn add -D @types/react @types/react-dom

# Redux
yarn add @reduxjs/toolkit react-redux
yarn add -D @types/react-redux

# Estilização
yarn add styled-components
yarn add -D @types/styled-components

# TypeScript
yarn add -D typescript

# Vite (já instalado via create-vite)
yarn add -D vite @vitejs/plugin-react
```

---

## 🧪 Scripts Disponíveis

```bash
# Iniciar desenvolvimento
yarn dev

# Build para produção
yarn build

# Preview da build de produção
yarn preview

# Linter (se configurado)
yarn lint
```

---

## 🎯 Boas Práticas Implementadas

### ✅ TypeScript

- Tipagem completa sem `any`
- Interfaces bem definidas
- Union types para actions
- RootState e AppDispatch exportados

### ✅ React

- Hooks modernos (`useSelector`, `useDispatch`)
- Componentes funcionais
- Sem class components

### ✅ Redux

- Redux Toolkit (padrão oficial)
- `configureStore` (não mais `createStore`)
- Estado imutável
- DevTools integradas

### ✅ Estilização

- Tema centralizado e reutilizável
- `createGlobalStyle` para reset
- `ThemeProvider` para compartilhar tema
- Dark theme por padrão

### ✅ Código

- Estrutura escalável
- Componentes isolados
- Separação de responsabilidades
- Fácil manutenção

---

## 🚀 Próximos Passos

Para expandir este projeto:

1. **Adicionar persistência**: Integrar `redux-persist` para salvar estado no `localStorage`
2. **Middleware assíncrono**: Usar `createAsyncThunk` para operações assíncronas
3. **Multiple slices**: Organizar em `slices/` quando adicionar mais reducers
4. **Testes**: Configurar Jest e React Testing Library
5. **Modo claro/escuro**: Implementar toggle de tema dinâmico
6. **API integration**: Conectar com backend usando RTK Query

---

## 📚 Recursos Recomendados

- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [React Redux TypeScript Guide](https://react-redux.js.org/tutorials/typescript-quick-start)
- [styled-components Docs](https://styled-components.com/)
- [Vite Docs](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

### Cache do Vite causando problemas?

```bash
rm -rf node_modules/.vite
yarn dev
```

---

## 📄 Licença

Este projeto é licenciado sob a licença **MIT**. Veja o arquivo `LICENSE` para detalhes.

---

## 👨‍💻 Autor

Criado como referência de boas práticas em React + TypeScript em 2025.

---

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. Verifique se tem Node.js 22+ instalado
2. Delete `node_modules` e rode `yarn install` novamente
3. Limpe o cache: `yarn cache clean`
4. Restart o servidor dev

---

**Última atualização:** Novembro 2025
