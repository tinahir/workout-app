/** @jsxImportSource @emotion/react */
import { Link, Grid } from "theme-ui";
import WorkoutItem from "@/components/WorkoutItem";
import { replaceWhiteSpace } from "@/shared/stringUtility";
import { Workout } from "@/lib/workouts";
import Pagination from "@/components/Pagination";
import { FC } from "react";

type Props = {
  data: Workout[] | undefined;
  currentPage: number;
  totalPages: number;
};

const WorkoutList: FC<Props> = ({
  data: workouts,
  currentPage,
  totalPages,
}) => {
  const nextDisabled = currentPage === totalPages;
  const prevDisabled = currentPage === 1;

  return (
    <>
      <Grid
        gap={3}
        sx={{
          gridTemplateColumns: [
            [1, "1fr"],
            [2, "1fr 1fr"],
          ],
        }}
      >
        {workouts?.map((workout) => (
          <Link
            key={workout.id}
            sx={{
              textDecoration: "none",
            }}
            href={`/workouts/${workout.id}/${replaceWhiteSpace(
              workout.name,
              "-"
            )}`}
          >
            <WorkoutItem {...workout}></WorkoutItem>
          </Link>
        ))}
      </Grid>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      ></Pagination>
    </>
  );
};

export default WorkoutList;
