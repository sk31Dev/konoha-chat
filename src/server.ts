import express from "express";
import http from "http";
import { Server } from "socket.io";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  animals,
  colors,
} from "unique-names-generator";
import path from "path";

const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public")); // Serve static files from the 'public' directory

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const config: Config = {
  dictionaries: [adjectives, colors, animals],
  separator: "-",
  length: 2,
};

io.on("connection", (socket) => {
  const username = uniqueNamesGenerator(config);
  socket.emit("set username", username);

  socket.on("chat message", (msg: any) => {
    io.emit("chat message", { username, msg });
  });
  socket.on("disconnect", () => {
    console.log(`${username} disconnected.`);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Choosing port ${PORT}`);
});
