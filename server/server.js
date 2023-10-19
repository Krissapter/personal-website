import express from "express";

const app = express();
app.use(express.static("../client"));
app.listen(process.env.PORT || 3000);

console.log("Server running at http://localhost:3000");