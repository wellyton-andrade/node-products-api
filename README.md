# 🛍️ Node Products API

API REST simples e direta para gerenciar produtos (CRUD).  
Bonita por fora, prática por dentro.

![Node](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

> Base URL (padrão): `http://localhost:3000`

---

## ✨ Funcionalidades

- **GET /products**: Lista todos os produtos.
- **GET /products/:id**: Retorna os detalhes de um produto específico.
- **POST /products**: Cria um novo produto.
- **PATCH /products/:id**: Atualiza parcialmente um produto.
- **DELETE /products/:id**: Remove um produto.

---

## 🛣️ Rotas da API

### **GET /products**

Lista todos os produtos cadastrados.

### **GET /products/:id**

Retorna os detalhes de um produto específico com base no `id`.

### **POST /products**

Cria um novo produto.  
**Exemplo de corpo da requisição**:

```json
{
  "name": "Headset Gamer",
  "price": 250.0,
  "stock": 5,
  "description": "Áudio surround 7.1",
  "imageUrl": "https://example.com/headset.jpg"
}
```

### **PATCH /products/:id**

Atualiza parcialmente um produto com base no `id`.  
**Exemplo de corpo da requisição**:

```json
{
  "price": 300.0,
  "stock": 8
}
```

### **DELETE /products/:id**

Remove um produto com base no `id`.

---

## ⚙️ Configuração do Ambiente

1. Crie o arquivo `.env` copiando o exemplo fornecido:

   ```bash
   cp .env.example .env
   ```

2. Certifique-se de que os valores no `.env` estão corretos para o seu ambiente de desenvolvimento.

---

## 🔥 Como Rodar a Aplicação

### **Passo 1: Instalar Dependências**

Antes de tudo, instale as dependências do projeto utilizando o gerenciador de pacotes `npm`:

```bash
npm install
```

Este comando irá baixar e instalar todas as dependências listadas no arquivo `package.json`.

---

### **Passo 2: Subir os serviços Docker**

Inicie os serviços necessários (banco de dados, etc.) usando o comando:

```bash
npm run docker:up
```

Este comando utiliza o `docker-compose.yml` para subir os serviços em segundo plano.

---

### **Passo 3: Gerar o Prisma Client**

Depois que o banco estiver rodando, gere o Prisma Client para interagir com o banco de dados:

```bash
npm run prisma:generate
```

---

### **Passo 4: Aplicar Migrações**

Aplique as migrações do Prisma ao banco de dados para garantir que ele esteja atualizado:

```bash
npm run prisma:migrate
```

---

### **Passo 5: Iniciar a aplicação**

Por fim, inicie a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

A aplicação estará acessível em:

```
http://localhost:3000
```

---

## ✅ Checklist

- [ ] Clonei o repositório
- [ ] Copiei o arquivo `.env.example` para `.env`
- [ ] Configurei o banco de dados no `.env`
- [ ] Instalei as dependências do projeto com `npm install`
- [ ] Rodei `npm run docker:up` para subir os serviços
- [ ] Rodei `npm run prisma:generate` para gerar o cliente do Prisma
- [ ] Executei `npm run prisma:migrate` para aplicar migrações
- [ ] Iniciei a aplicação com `npm run dev`
- [ ] A API respondeu em `GET /products`

Feito com 💚 por [Wellyton Andrade](https://github.com/wellyton-andrade). Bom código! 🚀
