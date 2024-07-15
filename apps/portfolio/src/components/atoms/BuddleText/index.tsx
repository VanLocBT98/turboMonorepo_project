"use client";
import React from "react";
import * as S from "./styles";

export interface IBuddleTextProps {
  content: string;
}

const BuddleText: React.FC<IBuddleTextProps> = ({ content }) => {
  return (
    <React.Fragment>
      {content.split("").map((item, index) => (
        <S.BubbleTextItem key={index}>{item}</S.BubbleTextItem>
      ))}
    </React.Fragment>
  );
};

export default BuddleText;
