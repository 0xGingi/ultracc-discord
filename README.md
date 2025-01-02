# Ultra API Discord Bot

## Setup

* Get Your API KEY

* Make a .env file with 
```
ULTRA_URL=https://username.server.usbx.me/ultra-api/get_stats
ULTRA_TOKEN=your_API_token
TOKEN=Discord_Bot_Token
```

## NodeJS
```
npm install or bun install (I prefer bun)
node index.js
```

## Docker
```
docker pull 0xgingi/ultracc-docker:latest
docker run -d --name ultra --restart=always -v /home/user/path-to-folder-with-env-file:/app/config 0xgingi/ultracc-docker:latest
```
