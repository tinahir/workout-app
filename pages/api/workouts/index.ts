import type { NextApiRequest, NextApiResponse } from "next";
import { workoutManager } from "@/lib/workout-manager";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const pageNumber = Number(req.query?.page ?? 1);
    const limit = Number(req.query?.limit ?? 20);
    const q = String(req.query?.q ?? "");

    await workoutManager.init();
    const data = workoutManager.getWorkouts(pageNumber, limit, q);
    res.setHeader("Cache-Control", "max-age=1, stale-while-revalidate=59");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(200).json({ error });
  }
}
