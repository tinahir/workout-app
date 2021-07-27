import path from "path";
import fs from "fs";
import * as csv from "fast-csv";

export type Workout = {
  id: number;
  name: string;
  description: string;
  category: string;
  start_date: string;
};

const getCsvData = (filename: string): Promise<any[]> => {
  const data = new Array<any>();
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(process.cwd(), `public/${filename}`))
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => reject(error))
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => resolve(data));
  });
};

export async function getWorkouts() {
  const workouts = await getCsvData("workouts.csv");
  const workoutsIds = new Array<string>();
  const workoutByIds: Record<number, Workout> = {};
  workouts.forEach((workout) => {
    workoutsIds.push(workout.id);
    workoutByIds[workout.id] = workout;
  });
  return { workoutsIds, workoutByIds };
}
