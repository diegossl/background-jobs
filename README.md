# Background tasks

Background process or background process, is a term referring to Operating Systems, which designates the processes that occur in which there is no interaction with the user.

## Setup

To execute the project, it will be necessary to install the dependencies by typing the following command in the terminal:

```bash
npm install
```

Then, create a file called **.env** and copy to it the contents of the file **.env.exemple**, which already exists in the project, and enter your credentials. Then type the following command in the terminal:

Finally, type the following command in the terminal to start the server:

```bash
npm dev
```

### Redis

For the project to work you need to have Redis installed on your machine or use a container, such as Docker, to run an instance of Redis.

### Use

The system is ready to be used on the route:

[http://localhost:3000/register](http://localhost:3000/register)

## Example of data entry:

A JSON object containing name and email.
 
```javascript
{
  "name": "Pessoa",
  "email": "pessoa@test.com"
}
```

## License

MIT
