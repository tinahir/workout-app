/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import axios from "axios";
import { Workout } from "@/lib/workouts";
import { Result } from "@/lib/result";
import CategoryFilter from "@/components/CategoryFilter";
import NotFound from "@/pages/404";
import { ChangeEvent, useRef } from "react";
import { useState } from "react";
import WorkoutList from "@/components/WorkoutList";
import { useWorkoutsFilter } from "@/hooks/useWorkoutsFilter";

const categories = Array.of(1, 2, 3, 4, 5, 6, 7).map((item) => `C${item}`);

let selectedCheckboxeSet = new Set();

export default function WorkoutsPage({
  data: workouts,
  currentPage,
  totalPages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState("");

  const { data: fiterWorkoutsByCategory } = useWorkoutsFilter(
    selectedCheckboxes,
    currentPage
  );

  const inputRef = useRef(null);

  if (Array.isArray(workouts) && workouts.length === 0) {
    return <NotFound title="This recipes could not be found" />;
  }

  const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedCheckboxeSet.has(value)) {
      selectedCheckboxeSet.delete(value);
    } else {
      selectedCheckboxeSet.add(value);
    }
    setSelectedCheckboxes([...selectedCheckboxeSet].join());
  };

  const filterWorkouts =
    selectedCheckboxes !== "" ? fiterWorkoutsByCategory?.data : workouts;

  const currentTotalPages =
    selectedCheckboxes !== ""
      ? Math.ceil((fiterWorkoutsByCategory?.totalRecords ?? 1) / 20)
      : totalPages;

  return (
    <div css={tw`mt-10 mx-auto max-w-screen-xl px-4`}>
      <CategoryFilter>
        {categories.map((category) => (
          <span key={category} css={tw`mr-3`}>
            <input
              ref={inputRef}
              type="checkbox"
              value={category}
              onChange={toggleCheckbox}
            ></input>
            <label css={tw`text-red-100`}>{category}</label>
          </span>
        ))}
      </CategoryFilter>
      <WorkoutList
        data={filterWorkouts}
        totalPages={currentTotalPages}
        currentPage={currentPage}
      ></WorkoutList>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await axios.get<Result<Workout>>(
    `http://localhost:4000/api/workouts`
  );
  const totalRecords = result.data.totalRecords;
  const totalPages = Math.ceil(totalRecords / 20);

  const paths = [];

  for (let page = 1; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: any) {
  const result = await axios.get<Result<Workout>>(
    `http://localhost:4000/api/workouts?page=${params.page}`
  );

  return {
    props: {
      ...result.data,
      totalPages: Math.ceil(result.data.totalRecords / 20),
      currentPage: Number(params.page),
    },
    revalidate: 60,
  };
}
