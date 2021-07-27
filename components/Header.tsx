/** @jsxImportSource @emotion/react */
import Link from "next/link";
import tw from "twin.macro";

export const Header = () => {
  return (
    <div css={tw`relative py-6 px-4 sm:px-6 lg:px-8`}>
      <nav
        css={tw`relative flex items-center justify-between sm:h-10 lg:justify-start`}
      >
        <div css={tw`flex items-center flex-grow flex-shrink-0 lg:flex-grow-0`}>
          <div css={tw`flex items-center justify-between w-full md:w-auto`}>
            <Link href="/" passHref>
              <span
                css={tw`text-2xl tracking-tight leading-10 font-extrabold text-red-300 sm:text-5xl sm:leading-none md:text-4xl`}
              >
                Gymondo
              </span>
            </Link>
          </div>
        </div>
        <div css={tw`hidden md:block md:ml-10 md:pr-4`}>
          <Link href="/" passHref>
            <span
              css={tw`font-medium text-white hover:text-red-300 transition duration-150 ease-in-out`}
            >
              Home
            </span>
          </Link>
          <Link href="/workouts/page/1" passHref>
            <span
              css={tw`ml-8 font-medium text-white hover:text-red-300 transition duration-150 ease-in-out`}
            >
              Workouts
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
