/** @jsxImportSource @emotion/react */
import { Workout } from "@/lib/workouts";
import tw from "twin.macro";

type Props = Workout;

export default function WorkoutItem({
  name,
  description,
  start_date,
  category,
}: Props) {
  const startDate = new Date(Number(start_date));
  return (
    <div
      css={tw`hover:outline-white hover:border-blue-300 bg-gray-900 rounded-lg`}
    >
      <article css={tw`md:flex flex-col`} data-test="question">
        <div css={tw`p-4`}>
          <div
            css={tw`tracking-wide text-sm text-white font-bold mb-2`}
            data-test="posting-name"
          >
            {name}
          </div>

          <p css={tw`text-gray-500 m-0 mb-2`} data-test="question-published-at">
            Start on {startDate.toDateString()}
          </p>
          <p css={tw`text-gray-500 m-0`} data-test="question-choices">
            Category {category}
          </p>
        </div>
      </article>
    </div>
  );
}
