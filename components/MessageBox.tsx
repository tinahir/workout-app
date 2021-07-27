/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";
import Center from "@/components/Center";

const MessageBox: React.FunctionComponent = ({ children }) => (
  <Center>
    <div
      css={tw`text-4xl tracking-tight leading-10 font-extrabold text-white sm:leading-none text-4xl`}
    >
      {children}
    </div>
  </Center>
);

export default MessageBox;
