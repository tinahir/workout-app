/** @jsxImportSource @emotion/react */
import { GetStaticPaths } from "next";
import tw from "twin.macro";
import { useRouter } from "next/router";
import NotFound from "../404";
import axios from "axios";
import { Workout } from "@/lib/workouts";
import MessageBox from "@/components/MessageBox";
import LeftArrowIcon from "@/components/LeftArraow";

type Props = {
  workout: Workout;
  error: Error;
};

export const createMarkup = (html: string) => {
  return { __html: html };
};

export default function WorkoutPage({ workout }: Props) {
  const { isFallback } = useRouter();

  if (!isFallback && !workout) {
    return (
      <NotFound statusCode={404} title="This workout could not be found" />
    );
  }

  if (isFallback) {
    return <MessageBox>Loading...</MessageBox>;
  }

  if (workout) {
    const startDate = new Date(Number(workout.start_date));

    return (
      <div
        css={tw`mt-10 mx-auto max-w-screen-xl px-4`}
        data-test="posting-name"
      >
        <div onClick={() => window.history.back()}>
          <div css={tw` flex items-center text-sm text-gray-500`}>
            <LeftArrowIcon />
            <span data-test="back">Back</span>
          </div>
        </div>
        <article css={tw`md:flex shadow sm:mt-8`}>
          <div css={tw`mt-4 md:mt-0 md:ml-2`}>
            <h2
              data-test="posting-name"
              css={tw`text-3xl tracking-tight leading-10 font-extrabold text-red-200 sm:leading-none`}
            >
              {workout.name}
            </h2>
            <p css={tw`mt-1 text-gray-500 mt-1`} data-test="posting-location">
              {workout.category}
            </p>
            <p css={tw`mt-1 text-gray-500 mt-1`} data-test="posting-location">
              Start on {startDate.toDateString()}
            </p>
            <p
              css={tw`mt-4 text-gray-500`}
              dangerouslySetInnerHTML={createMarkup(workout.description)}
            ></p>
          </div>
        </article>
      </div>
    );
  }

  return <MessageBox>Posting has been not found</MessageBox>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export async function getStaticProps({ params }: { params: { id: string[] } }) {
  const {
    id: [id],
  } = params;

  const result = await axios.get(`http://localhost:4000/api/workouts/${id}`);

  return {
    props: {
      workout: result.data as Workout,
    },
    revalidate: 60,
  };
}
