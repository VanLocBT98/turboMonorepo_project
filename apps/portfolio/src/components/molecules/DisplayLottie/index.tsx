"use client";
import React from "react";
import Lottie from "react-lottie";
import * as S from "./styles";

export interface IDisplayLottieProps {
  animationPath?: string;
}

const DisplayLottie: React.FC<IDisplayLottieProps> = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };
  return (
    <S.DisplayLottie onClick={() => null}>
      <Lottie options={defaultOptions} />
    </S.DisplayLottie>
  );
};

export default DisplayLottie;
