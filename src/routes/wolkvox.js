import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { id } = req.body;
  res.status(200).json({ message: `Post ok, id: ${id}` });
});

export default router;
