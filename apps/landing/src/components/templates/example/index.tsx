"use client";
import React from "react";
import * as S from "./styles";

export interface IExampleProps {
  children?: React.ReactNode;
}

const Example: React.FC<IExampleProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Example;
