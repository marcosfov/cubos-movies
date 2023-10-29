# Aplicação NextJS responsivo que consume a API do The Movie DB (TMDB) e permite buscar e ver detalhes de filmes de seu catálogo.

# Sobre o projeto

O projeto faz o consumo da API do TMDB para retornar filmes. A página inicial já traz os filmes mais populares de acordo com a votação dos usuários da plataforma TMDB. Além disso, o pode-se fazer a busca por nome ou por gênero, para isso basta fazer a pesquisa e pressionar a tecla Enter para obter os resultados por nome e caso deseje os resultados por gênero deve-se selecionar o checkbox "Filtrar por gênero", em ambos os casos resulta em 5 filmes por página.

Em cada filme é exibido o nome, cartaz, data de lançamento, sinopse, pontuação do filme e categorias. Caso o usuário queria mais informações sobre o filme em específico, pode-se clicar no card e terá acesso a mais detalhes do filme, como por exemplo: status, idioma, duração, orçamento, receita, lucro, categorias e trailer, quando disponíveis.

Caso o usuário queira retornar à página inicial, basta clicar em "Voltar" e assim pode pesquisar outros filmes.

# 🚀 Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# 💻 Getting started

## Requisitos

Solicitar KEY da API em TheMovieDB - [Documentação do TMDb](https://developer.themoviedb.org/docs/getting-started)

Clone o projeto e acesse a pasta

$ git clone [https://github.com/marcosfov/cubos-movies.git

# Siga os passos abaixo

## Instale as dependências

$ npm i

## Faça uma cópia do arquivo '.env.example' para '.env.local'

$ cp .env.example .env.local

Insira sua Key cadastrada no TheMovieDB no valor da variável NEXT_PUBLIC_TMDB_API_KEY

## Comandos

-dev: Inicia o servidor de desenvolvimento do Next.js.

-build: Compila e gera a produção.

-generate: Gera código automaticamente com Plop.

-start: Inicia o servidor de produção.

-lint: Executa a análise estática de código para encontrar problemas no código-fonte.

## Start

$ npm run dev

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
