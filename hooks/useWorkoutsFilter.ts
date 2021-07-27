import { Result } from "@/lib/result";
import { Workout } from "@/lib/workouts";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useWorkoutsFilter(q: string, pageNumber = 0) {
  const { data, error } = useSWR<Result<Workout>>(
    q ? `/api/workouts?q=${q}&page=${pageNumber}` : null,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
