# Tarefas em segundo plano

Processo Background ou processo de segundo plano, é um termo referentes a Sistemas Operacionais, que designa os processos que ocorrem em que não há interação com o usuário.

## Setup

## Setup

Para executar o projeto, será necessário instalar as dependências digitando o seguinte comando no terminal:

```bash
npm install
```

Em seguida, crie um arquivo chamado **.env** e copie para ele o conteúdo do arquivo **.env.exemple**, que já existe no projeto, e coloque suas credenciais. Então digite o seguinte comando no terminal:

Por fim, digite o seguinte comando no terminal para iniciar o servidor:

```bash
npm dev
```

O sistema está pronto para ser usado na rota:

[http://localhost:3000/register](http://localhost:3000/register)

## Exemplo de entrada de dados:

Um objeto JSON contendo nome e email.
 
```javascript
{
  "name": "Pessoa",
  "email": "pessoa@test.com"
}
```

## Licença

MIT