
<p align="center"><strong>Backend Programa de Estágio Pitang 2024.</strong></p>

<p align="center">
  <a href="#get-started"><strong>Get Started</strong></a> ·
  <a href="#decisões"><strong>Decisões</strong></a> ·
  <a href="#deployment"><strong>Considerações</strong></a>
</p>

<br/>

## Get Started

Para rodar, primeiro, crie um .env com as variáveis que preferir,
no .env.example tem as variáveis necessárias e quais eu usei para rodar o projeto.
abra o terminal na pasta do projeto e,
Instale as dependências:

```shell
npm install
```

Execute em modo desenvolvedor:

```shell
npm run dev
```

> _Note_: Para o acesso visual do endpoint com todas as features, é recomendado acessar pelo <a href="https://github.com/GuPoroca/projeto-pitang-frontend" target="_blank"> Frontend </a> ao mesmo tempo.

## Decisões

Esse Backend foi bem simples de se implementar, apenas com 2 endpoints e alguns testes, tomei a liberdade
de usar Prisma como ORM e um banco de dados leve SQLite, que foi como fizemos em aula com Keven.

Além do uso do Prisma também usei o Jest com o SuperTest para testar os endpoints.

Outras bibliotecas/middlewares usados e recomendados por Keven, foram:

- cors, para caso futuro de implementação de acesso restrito
- helmet, para a segurança do backend em Express
- morgan, para o log de HTTP requests

## Considerações

Gostaria de primeiramente agradecer a oportunidade de aprender e me desenvolver com vocês, e torço para que
essa experiência seja apenas o começo de uma grande jornada pela frente.