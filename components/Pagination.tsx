/** @jsxImportSource @emotion/react */
import { FC } from "react";
import Link from "next/link";
import Button from "./Button";
import tw from "twin.macro";

type Props = {
  totalPages: number;
  currentPage: number;
  prevDisabled: boolean;
  nextDisabled: boolean;
};

const Pagination: FC<Props> = ({
  totalPages,
  currentPage = 1,
  prevDisabled,
  nextDisabled,
}) => {
  const prevPageUrl =
    currentPage === 2
      ? "/workouts/page/1"
      : `/workouts/page/${currentPage - 1}`;

  const nextPageUrl = `/workouts/page/${currentPage + 1}`;

  return (
    <div css={tw`flex mt-5`}>
      <Button css={tw`flex-1`}>
        {prevDisabled && <span>Previous page</span>}
        {!prevDisabled && <Link href={prevPageUrl}>Previous page</Link>}
      </Button>
      <p css={tw`flex-1 text-red-50 text-center`}>
        Page {currentPage} of {totalPages}
      </p>

      <Button css={tw`flex-1`}>
        {nextDisabled && <span>Next page</span>}
        {!nextDisabled && <Link href={nextPageUrl}>Next page</Link>}
      </Button>
    </div>
  );
};

export default Pagination;
