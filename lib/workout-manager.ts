import { getWorkouts, Workout } from "./workouts";

export class WorkoutManager {
  private workoutByIds: Record<string, Workout>;
  private workoutsIds: Array<string>;

  async init() {
    const data = await getWorkouts();
    this.workoutByIds = data.workoutByIds;
    this.workoutsIds = data.workoutsIds;
  }

  getWorkouts(page = 0, limit = 20, query = "") {
    query = query.toUpperCase();

    let workoutsIds = this.workoutsIds;
    if (query !== "") {
      workoutsIds = this.workoutsIds.filter((id) => {
        const workout = this.workoutByIds[id];
        return query.includes(workout.category.toUpperCase());
      });
    }

    const pageWiseWorkoutsIds = workoutsIds.slice(
      (page - 1) * limit,
      page * limit
    );

    const workouts = pageWiseWorkoutsIds.map((id) => this.workoutByIds[id]);

    return {
      totalRecords: workoutsIds.length,
      data: workouts,
      limit,
    };
  }

  getWorkoutById(id: string) {
    return this.workoutByIds[id];
  }
}

export const workoutManager = new WorkoutManager();
