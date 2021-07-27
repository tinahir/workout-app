/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
const Button = ({ ...props }) => (
  <button
    {...props}
    css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-300 focus:outline-none focus:border-red-700  transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10`}
  />
);
export default Button;
