/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";

const Center: React.FunctionComponent = ({ children }) => {
  return (
    <div css={tw`flex items-center justify-center mt-32 `}>{children}</div>
  );
};

export default Center;
