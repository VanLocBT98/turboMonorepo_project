"use client";
import React from "react";
import * as S from "./styles";

export interface ICardGithubProps {
  title: string;
  desc: string;
}

const CardGithub: React.FC<ICardGithubProps> = ({ title, desc }) => {
  return (
    <S.CardGithubWrap>
      <S.CardGithubTitle>{title}</S.CardGithubTitle>
      <S.CardGithubDesc>{desc}</S.CardGithubDesc>
      <S.CardGithubIcon />
    </S.CardGithubWrap>
  );
};

export default CardGithub;
