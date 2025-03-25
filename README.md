# Konoha Chat

Konoha Chat is a simple real-time chat application built with **Node.js**, **Express**, **Socket.IO**, and **TypeScript**. It allows users to send and receive messages in real-time with randomly generated usernames.

## Features

- Real-time messaging using WebSockets (Socket.IO).
- Randomly generated usernames for users upon connection.
- Responsive design for mobile and desktop devices.
- Styled using Bootstrap and custom CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sk31Dev/konoha-chat.git
   cd konoha-chat

   ```

2. Install dependencies:

```bash
npm install
```

3. Build the TypeScript code:

```bash
npm run build
```

## Usage

1. Start the server

```bash
npm start
```

2. Open your browser and navigate to: http://localhost:3000

3. Start chatting! Messages will appear in real-time.

4. To share with others, port forward your localhost using ngrok or similar tools and share the URL.

## Technologies Used

Node.js: Backend runtime environment.
Express: Web framework for serving static files and handling routes.
Socket.IO: Real-time communication between the server and clients.
TypeScript: Strongly typed JavaScript for better development experience.
Bootstrap: CSS framework for responsive design.
unique-names-generator: Library for generating random usernames.

## File Descriptions

src/server.ts: Contains the server logic, including WebSocket events and random username generation.

public/index.html: Frontend HTML file with embedded JavaScript for handling chat functionality.

tsconfig.json: TypeScript configuration file for compiling the code.

.gitignore: Specifies files and directories to be ignored by Git.

## License

This project is licensed under the MIT License.

## Author

Developed by Shubham Kukreti.
