import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/person/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cast details" });
  }
});

export default router;
