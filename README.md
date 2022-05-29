# SOLID User API

Simples user API with register manipulation and email system using MailTrap made with typescript using SOLID and Package by Feature practices

## Why? ✳️
I made this repo for typescript and clean architecture study.

## How to install 👀
1. Clone the project

2. Install Packages
```
yarn install
```

3. Goto to file `src/providers/implementations/MailTrapMailProvider.ts` and change the following variables to your MailTrap access to see the incoming emails:
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

4. Execute the dev start command
```
yarn dev
```

4. The server will be running on port 3333

## How to Use 🕹️
1. Send a POST request to `http://localhost:3333/users` with the following JSON format data:
```
{
	"name": "YOURNAME",
	"email": "YOUREMAIL",
	"password": "YOURPASSWORD"
}
```

2. Send a DELETE request to `http://localhost:3333/users` with the following JSON format data to delete the created user:
```
{
	"email": "YOUREMAIL"
}
```

## Build
1. Execute the build script:
```
yarn build
```

2. The builded files gonna be in **dist** folder.

3. Execute the `server.js` in dist folder with:
```
yarn build:execute
```

4. Enjoy

## Found a bug? 🐛
Create a issue in the repo or simply create a pull request with the solution and a description about it (I'll thank a lot)

## Special Thanks 🔯
This project was based in a [Rocketseat video](https://youtu.be/vAV4Vy4jfkc) (PT-BR)