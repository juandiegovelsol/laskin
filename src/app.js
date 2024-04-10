import express from "express";
import cors from "cors";
import wolkvoxRouter from "./routes/wolkvox.js";

const port = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is ok" });
});

app.use("/wolkvox", wolkvoxRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

export { app };
