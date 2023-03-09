import type { NextApiRequest, NextApiResponse } from "next";
import { IMAGES_BASE_PATH } from "../../../../../util/constants";
import data from "./data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMovies[] | { message: string }>
) {
  try {
    const movies = data.results.map((movie) => ({
      ...movie,
      poster_path: `${IMAGES_BASE_PATH}${movie.poster_path}`,
    }));
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
