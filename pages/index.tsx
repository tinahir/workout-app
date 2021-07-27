/** @jsxImportSource @emotion/react */
import Head from "next/head";
import tw from "twin.macro";
import LinkButton from "@/components/LinkButton";

export default function HomePage() {
  return (
    <div css={tw`relative bg-black min-h-screen font-sans`}>
      <div css={tw`max-w-screen-xl mx-auto`}>
        <div
          css={tw`
              relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-24 xl:pb-32`}
        >
          <Head>
            <title>Gymondo</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main
            css={tw`mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8`}
          >
            <div css={tw`sm:text-center lg:text-left`}>
              <h2
                css={tw`text-4xl tracking-tight leading-10 font-extrabold text-red-100 sm:text-5xl sm:leading-none md:text-6xl`}
              >
                Get Fit. <br css={tw`xl:hidden`} />
                <span css={tw`text-red-300`}>Feel Happy</span>
              </h2>
              <p css={tw`text-red-100`}>
                Take it outside. Pilates in the park, HIIT in your backyard,
                yoga on the balcony—the choice is yours. <br />
                Unlock 300+ workouts you can do absolutely anywhere with zero to
                minimal equipment.
              </p>
              <div
                css={tw`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start`}
              >
                <LinkButton url="/workouts/page/1">GO TO WORKOUT</LinkButton>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
