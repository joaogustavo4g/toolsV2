# Tools &middot; [![GitHub license](https://img.shields.io/badge/license-GPL%20v3.0-green)](https://github.com/joaosl33p/tolls/blob/master/LICENSE) [![yarn](https://img.shields.io/badge/Yarn-v1.17.3-red)](https://yarnpkg.com/pt-BR/)

Tools é uma API para gerencia registros, podendo ser todalmente altera para qualquer ocasião que precise

## Pulos rápidos
> [Inciaindo o Projeto](#start)<br>
> [Como Usar](#usar)<br>
> [Como instalar manualmente](#dep)<br>

<a name="start"></a>
## Iniciando o projeto:
    
> necessario: [NodeJs](https://github.com/nodesource/distributions)

- clone o repósitorio
```
git clone https://github.com/joaosl33p/tolls
```
- Depois basta dá um ``` yarn init  ``` e todas as dependencias serão instaladas, caso isso não occorra, [click aqui](#dep)
    - caso não tenhe o yarn [clique aqui](https://yarnpkg.com/pt-BR/)

- Tudo pronto, basta dá um ```yarn dev``` e o server ira roda em localhost:3003 

- Configurando o banco de dados
 > O banco de dados usado é o mongoDB e foi usado o atlas, caso queira continuar a usar o atlas basta seguir os passos abaixo para configural
- crie um arquivo .env na raiz do seu projeto e insira o seguinte dado
  
 ```
 LINKDB: <link do mongoose atlas>
 ```
<a name="usar"></a>
## Como usar a Tools

Tools é uma API Rest e trabalha com requisição, abaixo ira qual requisição fazer para cada funcionalidade da ferramenta e como ela funciona 

> link usados do teste é o site do localhost padrão da api quando baixada, caso queira aterar acesse, basta acessar o arquivo <code>server.js</code> e altera a linha <code>15</code>



### Registrando novos dados (POST)
- Requisição
    > http://localhost:3003/tools

    > Um body tem que ser enviado junto com a requisição
    ```json
    code 201 - Created
    {
        "title": "hotel",
        "link": "https://github.com/typicode/hotel",
        "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
        "tags": [
        "node",
        "organizing",
        "webapps",
        "domain",
        "developer",
        "https",
        "proxy"
        ],
    }
    ```
- Resposta
  
    ```json
    Register: {
        "title": "hotel",
        "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box."
    }
    ```
### Listar todas todos o dados (GET)

- Requisição
    > http://localhost:3003/tools
- Resposta
  ```json
    code 200 OK
    "docs": [
        {
        "_id": "5d6f892392966f1160a0c382",
        "title": "hotel",
        "link": "https://github.com/typicode/hotel",
        "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
        "tags": [
            "node",
            "organizing",
            "webapps",
            "domain",
            "developer",
            "https",
            "proxy"
        ],
        "createdAt": "2019-09-04T09:51:31.714Z",
        "updatedAt": "2019-09-04T09:51:31.714Z",
        "__v": 0
        },
    ]
    "totalDocs": 7,
    "limit": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "page": 1,
    "totalPages": 7,
    "pagingCounter": 1,
    "prevPage": null,
    "nextPage": 2
  ```
### Filtrando por tag os dados (GET)
- Requisição
    > ira a tag que precise preocura após 'tag' no link de requições
    
    > Exemplo: http://localhost:3003/tools?tag=node
- Resposta 
    ```json
    code 200 OK
    "docs": [
        {
        "_id": "5d6f892392966f1160a0c382",
        "title": "hotel",
        "link": "https://github.com/typicode/hotel",
        "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
        "tags": [
            "node",
            "organizing",
            "webapps",
            "domain",
            "developer",
            "https",
            "proxy"
        ],
        "createdAt": "2019-09-04T09:51:31.714Z",
        "updatedAt": "2019-09-04T09:51:31.714Z",
        "__v": 0
        },
    ]
    "totalDocs": 3,
    "limit": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "page": 1,
    "totalPages": 3,
    "pagingCounter": 1,
    "prevPage": null,
    "nextPage": 2
  ```

### Deletando os dados (DELETE)
- Requisição
    > Para deletar basta fazer a requição passando o id da tools que quer deletar
    
    > Exemplo: http://localhost:3003/tools/5d6f892392966f1160a0c382

- Resposta
    ```json
     code 203 Non-Authoritative Information
    ```
<a name="dep"></a>
## Instalando as dependecias manualmente
```
yarn add express cors mongoose dotenv mongoose-paginate-v2

yarn add nodemon -D
```