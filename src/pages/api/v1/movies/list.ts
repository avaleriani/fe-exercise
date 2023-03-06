import type { NextApiRequest, NextApiResponse } from 'next'

const IMAGES_BASE_PATH = "https://image.tmdb.org/t/p/w500/"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ status: 'OK' })
}
