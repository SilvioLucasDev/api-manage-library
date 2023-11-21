# api-manage-library

Api em Node.js com PostgreSQL e aplicando os princípios SOLID, Clean Architecture e Design Patterns para resolver desafios comuns de desenvolvimento.

> ## Executando a Aplicação

Certifique-se de ter o PostgreSQL e o NodeJs instalados em sua máquina.

**1 - Env:** Renomeie o arquivo .env.example para .env e configure-o de acordo.
<br> **2 - Instalação de Dependências:** Execute `npm install` para instalar todas as dependências necessárias.
<br> **3 - Migrations:** Execute `npx prisma migrate dev` para rodar as migrations.
<br> **4 - Executando o Servidor:** Execute `npm run dev` para iniciar o servidor na porta especificada no .env.

> ## Endpoints

## Biblioteca

### Rota para cadastrar biblioteca.

- **Método:** POST
- **URL:** `http://localhost:{PORT}/v1/api/libraries`
- **Headers:**
  - `Content-Type` application/json
- **Corpo da Requisição:**

  ```json
  {
    "name": "String (Obrigatório)"
  }
  ```

## Autor

### Rota para cadastrar autor.

- **Método:** POST
- **URL:** `http://localhost:{PORT}/v1/api/authors`
- **Headers:**
  - `Content-Type` application/json
- **Corpo da Requisição:**

  ```json
  {
    "name": "String (Obrigatório)",
    "birthDate": "String (YYYY-mm-dd) (Obrigatório)",
    "nationality": "String (Obrigatório)",
    "libraryId": "String (Obrigatório)"
  }
  ```

### Rota para deletar um autor.

- **Método:** DELETE
- **URL:** `http://localhost:{PORT}/v1/api/authors/{id: String}`

## Livro

### Rota para cadastrar livro.

- **Método:** POST
- **URL:** `http://localhost:{PORT}/v1/api/books`
- **Headers:**
  - `Content-Type` application/json
- **Corpo da Requisição:**

  ```json
  {
    "title": "String (Obrigatório)",
    "gender": "String (Obrigatório)",
    "yearPublication": "String (Obrigatório)",
    "amount": "String (Obrigatório)",
    "authorId": "String (Obrigatório)",
    "libraryId": "String (Obrigatório)"
  }
  ```

### Rota para deletar um livro.

- **Método:** DELETE
- **URL:** `http://localhost:{PORT}/v1/api/books/{id: String}`

### Rota para listar livros com e sem filtro.

- **Método:** GET
- **URL:** `http://localhost:{PORT}/v1/api/books`
- **Parâmetros de Consulta:**

  - `search`: String (Opcional)
  - `borrowedBooks`: Boolean (Opcional)
  - `booksAvailable`: Boolean (Opcional)

- **Corpo da Requisição:**

  ```json
  {
    "libraryId": "String (Obrigatório)"
  }
  ```

## Usuário

### Rota para cadastrar usuário.

- **Método:** POST
- **URL:** `http://localhost:{PORT}/v1/api/users`
- **Headers:**
  - `Content-Type` application/json
- **Corpo da Requisição:**

  ```json
  {
    "name": "String (Obrigatório)",
    "email": "String (Obrigatório)",
    "libraryId": "String (Obrigatório)"
  }
  ```

### Rota para deletar um usuário.

- **Método:** DELETE
- **URL:** `http://localhost:{PORT}/v1/api/users/{id: String}`

### Rota para fazer um empréstimo de livro.

- **Método:** POST
- **URL:** `http://localhost:{PORT}/v1/api/users/loan`
- **Headers:**
  - `Content-Type` application/json
- **Corpo da Requisição:**

  ```json
  {
    "userId": "String (Obrigatório)",
    "bookId": "String (Obrigatório)"
  }
  ```

### Rota para fazer a devolução de livro.

- **Método:** PATCH
- **URL:** `http://localhost:{PORT}/v1/api/users/return/{id: String}`
