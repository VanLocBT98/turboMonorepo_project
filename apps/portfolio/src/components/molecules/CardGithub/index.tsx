"use client";
import React from "react";
import * as S from "./styles";

export interface ICardGithubProps {
  title: string;
  desc: string;
  link?: string;
}

const CardGithub: React.FC<ICardGithubProps> = ({ title, desc, link }) => {
  return (
    <S.CardGithubWrap onClick={() => window.open(link, "_blank")}>
      <S.CardGithubTitle>{title}</S.CardGithubTitle>
      <S.CardGithubDesc>{desc}</S.CardGithubDesc>
      <S.CardGithubIcon />
    </S.CardGithubWrap>
  );
};

export default CardGithub;
