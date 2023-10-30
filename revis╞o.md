# 1 HANDS ON
- Node JS é obrigatório para criar e executar projeto ReactJS.
- No NodeJS existem ferramentas npm e npx
- create-react-app é usado para criar o projeto React.
- npm é usado para instalar, remover ou atualizar bibliotecas e executar o projeto.
- npx é usado para executar ferramentas sem instalação prévia. (create-react-app): 
$ npx create-react-app nome_do_projeto
- yarn é alternativa ao npm.
- react-router-dom é usado para fazer o controle de rotas. Instalação: $ npm install react-router-dom

- A exportação é usado para enviar funções ou variaveis para outro arquivo:

export const exemplo = {
    nome: 'Exemplo'
}

export const exemplo2 = {
    nome: 'Exemplo 2'
}

- Importação é feita quando queremos usar alguma variavel ou função de outro arquivo:

import { exemplo, exemplo2 } from '/caminho/pasta';

- A exportação default é usado quando existe somente um valor a ser retornado:

const exemplo = {
    nome: 'Exemplo'
}

export default exemplo;

- Importação default:

import exemplo from '/caminho/pasta';


# Estrutura do projeto: 
- arquivo App.js cuida somente das rotas.
- nos arquivos dentro do diretório /pages irão conter código JSX(HTML) e importações de bibliotecas.
- os arquivos styles.js irão conter objetos de estilização:
export const estilo = {
    backgroundColor: "#fff"
}

# Execução do Projeto
$ cd my-app
$ npm install #instalar as dependências
$ npm start