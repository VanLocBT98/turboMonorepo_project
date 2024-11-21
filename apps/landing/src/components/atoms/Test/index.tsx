"use client";
import React from "react";
import * as S from "./styles";

export interface ITestProps {
  children?: React.ReactNode;
}

const Test: React.FC<ITestProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Test;
