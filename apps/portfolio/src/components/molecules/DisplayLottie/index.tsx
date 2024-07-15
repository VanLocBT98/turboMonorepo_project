"use client";
import React from "react";
import Lottie from "react-lottie";

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
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default DisplayLottie;
