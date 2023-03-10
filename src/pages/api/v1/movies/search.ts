import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMovies[] | { message: string }>
) {
  try {
    const searchTerm = req.query.searchTerm as string;
    const movies = data.results.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const formattedMovies = movies.map((movie) => ({
      ...movie,
      poster_path: `${process.env.IMAGES_BASE_PATH}${movie.poster_path}`,
    }));
    res.status(200).json(formattedMovies);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
