# Mywallet-backend
Bem-vindo ao MyWallet Backend! Este é o backend do projeto MyWallet, responsável por fornecer as APIs necessárias para a aplicação cliente interagir com o banco de dados MongoDB e gerenciar as informações financeiras.

Tecnologias Utilizadas
O MyWallet Backend foi desenvolvido utilizando as seguintes tecnologias:

Node.js: Ambiente de execução JavaScript server-side, usado como base para desenvolver a aplicação do lado do servidor.

Express.js: Framework para construção de aplicações web em Node.js. Foi utilizado para criar as rotas da API e gerenciar as requisições do cliente.

MongoDB: Banco de dados não relacional utilizado para armazenar as informações das transações e usuários de forma eficiente e escalável.

Como Rodar o Projeto
Para rodar o MyWallet Backend localmente em sua máquina, siga os passos abaixo:

Pré-requisitos
Node.js: Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em: https://nodejs.org/

MongoDB: É necessário ter o MongoDB instalado e em execução localmente ou acessível através de uma URL externa.

Passo 1: Clonar o repositório
Clone este repositório em um diretório de sua preferência utilizando o seguinte comando:

  =git clone https://github.com/seu_usuario/mywallet-backend.git
  
Passo 2: Instalar as dependências
Navegue para o diretório raiz do projeto e instale as dependências utilizando o npm:
  -cd mywallet-backend
   -npm install
Passo 3: Configurar o ambiente

Antes de executar o projeto, é necessário configurar as variáveis de ambiente. Para isso, crie um arquivo .env na raiz do diretório e defina as seguintes variáveis:
  MONGODB_URI=link_para_seu_banco_de_dados_mongodb
  PORT:5000
Passo 4: Iniciar o servidor
Após concluir as etapas anteriores, você está pronto para iniciar o servidor. No diretório raiz do projeto, execute o seguinte comando:
  -npm start
Se tudo estiver configurado corretamente, você verá a mensagem "Servidor iniciado na porta 3000" no console. Isso significa que o servidor está rodando corretamente.

Endpoints da API
A seguir, estão listados os principais endpoints da API do MyWallet Backend:

POST http://localhost:5000/register: Cria um novo usuário na base de dados.

POST http://localhost:5000/login: Realiza o login do usuário e retorna um token de autenticação.

GET http://localhost:5000/transactions: Retorna todas as transações associadas ao usuário autenticado.

POST  http://localhost:5000/transactions: Cria uma nova transação para o usuário autenticado.


Lembre-se de utilizar um cliente HTTP, como o Postman ou o Insomnia, para testar e interagir com os endpoints da API.

Considerações Finais
O MyWallet Backend é uma parte essencial do projeto MyWallet, fornecendo as funcionalidades necessárias para a gestão financeira do usuário. Certifique-se de que o MongoDB esteja em execução corretamente e que todas as variáveis de ambiente estejam configuradas de acordo com o seu ambiente de desenvolvimento.

Divirta-se trabalhando com o MyWallet Backend e sinta-se à vontade para contribuir com melhorias e novas funcionalidades! Em caso de dúvidas ou problemas, sinta-se à vontade para abrir uma issue no repositório ou entrar em contato com a equipe de desenvolvimento.

Boa codificação!
