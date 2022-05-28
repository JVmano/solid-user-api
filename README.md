# SOLID User API

Simples user API with register manipulation and email system using MailTrap made with typescript using SOLID and Package by Feature practices

## Why? ✳️
I made this repo for typescript and clean architecture study.

## How to use 👀
1. Clone the project

2. Install Packages
```
yarn install
```

3. Execute the start command
```
yarn start
```

4. Goto to file `src/providers/implementations/MailTrapMailProvider.ts` and change the following variables to your MailTrap access to see the incoming emails:
```
constructor () {
  this.transporter = nodemailer.createTransport({
    host: 'YOURMAILTRAPHOST',
    port: YOURMAILTRAPPORT,
    auth: {
      user: 'YOURMAILTRAPUSERNAME',
      pass: 'YOURMAILTRAPPASSWORD'
    }
  })
}
```

5. Send a request to `http://localhost:3333/users` with the following JSON format data:
```
{
	"name": "YOURNAME",
	"email": "YOUREMAIL",
	"password": "YOURPASSWORD"
}
```

6. Enjoy

## Found a bug? 🐛
Create a issue in the repo or simply create a pull request with the solution and a description about it (I'll thank a lot)

## Special Thanks 🔯
This project was based in a [Rocketseat video](https://youtu.be/vAV4Vy4jfkc) (PT-BR)