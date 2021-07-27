/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

type Props = {
  url: string;
};

const LinkButton: React.FunctionComponent<Props> = ({
  children,
  url = "/",
}) => {
  return (
    <Link href={url} passHref>
      <div css={tw`rounded-md shadow cursor-pointer`}>
        <button
          css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-300 focus:outline-none focus:border-red-700  transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10`}
        >
          {children}
        </button>
      </div>
    </Link>
  );
};

export default LinkButton;
