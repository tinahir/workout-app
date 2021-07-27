import type { NextApiRequest, NextApiResponse } from "next";
import { workoutManager } from "@/lib/workout-manager";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    await workoutManager.init();
    const data = workoutManager.getWorkoutById(id as string);
    res.setHeader("Cache-Control", "max-age=1, stale-while-revalidate=59");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(200).json({ error });
  }
}
