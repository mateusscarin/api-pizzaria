# API Pizzaria

Esta é uma API para gerenciamento de uma pizzaria, construída com Node.js juntamente com banco relacional PostgreSQL. A API oferece autenticação via JWT e suporte para upload de imagens, e inclui várias rotas para gerenciar usuários, categorias, produtos, e pedidos.

## Funcionalidades

### Autenticação de Usuários
- **Criar Usuário**: `POST /user`
- **Autenticar Usuário**: `POST /session`
- **Detalhes do Usuário**: `GET /userinfo` (Requer autenticação)

### Gerenciamento de Categorias
- **Criar Categoria**: `POST /category` (Requer autenticação)
- **Listar Categorias**: `GET /categories` (Requer autenticação)

### Gerenciamento de Produtos
- **Criar Produto**: `POST /product` (Requer autenticação, com upload de imagem)
- **Listar Produtos por Categoria**: `GET /products/category` (Requer autenticação)

### Gerenciamento de Pedidos
- **Criar Pedido**: `POST /order` (Requer autenticação)
- **Remover Pedido**: `DELETE /order` (Requer autenticação)
- **Enviar Pedido**: `PATCH /order/draft` (Requer autenticação)
- **Atualizar Status do Pedido**: `PATCH /order/status` (Requer autenticação)
- **Listar Pedidos Abertos**: `GET /orders/open` (Requer autenticação)
- **Listar Pedidos Fechados**: `GET /orders/closed` (Requer autenticação)
- **Detalhes do Pedido**: `GET /order/details` (Requer autenticação)

### Gerenciamento de Itens do Pedido
- **Adicionar Item ao Pedido**: `POST /item` (Requer autenticação)
- **Remover Item do Pedido**: `DELETE /item` (Requer autenticação)

## Rotas da API

### Usuários
- `POST /user`: Cria um novo usuário.
- `POST /session`: Autentica um usuário.
- `GET /userinfo`: Obtém detalhes do usuário autenticado.

### Categorias
- `POST /category`: Cria uma nova categoria.
- `GET /categories`: Lista todas as categorias.

### Produtos
- `POST /product`: Cria um novo produto (com upload de imagem).
- `GET /products/category`: Lista produtos por categoria.

### Pedidos
- `POST /order`: Cria um novo pedido.
- `DELETE /order`: Remove um pedido.
- `PATCH /order/draft`: Envia um pedido.
- `PATCH /order/status`: Atualiza o status de um pedido.
- `GET /orders/open`: Lista pedidos abertos.
- `GET /orders/closed`: Lista pedidos fechados.
- `GET /order/details`: Obtém detalhes de um pedido.

### Itens do Pedido
- `POST /item`: Adiciona um item a um pedido.
- `DELETE /item`: Remove um item de um pedido.

## Autenticação

A API utiliza JWT (JSON Web Token) para autenticação. Para acessar as rotas protegidas, é necessário incluir um token válido no cabeçalho da requisição.

## Upload de Imagens

O endpoint para criação de produtos suporta upload de imagens. Utilize o campo `file` no corpo da requisição para enviar a imagem do produto.
