/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { FC } from "react";

const CategoryFilter: FC = ({ children }) => {
  return (
    <section css={tw`flex mb-4`}>
      <div
        css={tw`hover:outline-white hover:border-blue-300 bg-gray-900 w-full`}
      >
        <article css={tw`md:flex flex-col`} data-test="question">
          <div css={tw`p-4`}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default CategoryFilter;
