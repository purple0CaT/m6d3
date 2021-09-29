import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { connctDb } from "./db/start.js";
import "./db/modules/connect.js";
import products from "./services/products/products.js";
//=
const server = express();
const port = process.env.PORT;
//=
server.use(cors());
server.use(express.json());

server.use("/products", products);
//=
server.listen(port, async () => {
  connctDb();
  console.log("🚀 Port =>", port);
});
console.table(listEndpoints(server));
