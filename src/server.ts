import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public")); // Serve static files from the 'public' directory

app.get("/", (req, res) => {
  // res.send("Chat server is up");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

io.on("connection", (socket) => {
  console.log("Shubham Kukreti connected.");
  socket.on("chat message", (msg: any) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Choosing port ${PORT}`);
});
