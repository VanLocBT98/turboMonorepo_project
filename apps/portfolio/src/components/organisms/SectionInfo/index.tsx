"use client";
import TypingEffect, {
  ITypingEffectProps,
} from "@/components/molecules/TypingEffect";

import React from "react";
import * as S from "./styles";

export interface ISectionInfoProps extends ITypingEffectProps {
  name: string;
  role: string[];
}

const SectionInfo: React.FC<ISectionInfoProps> = ({ role, name }) => {
  return (
    <S.SectionInfoWrap>
      <S.SectionInfoName>
        <span>Hi all,I'm</span> <S.InfoName>{name}</S.InfoName>
      </S.SectionInfoName>
      <S.InfoWelcome>Welcome Here, I'm a</S.InfoWelcome>
      <S.InfoRole>
        <TypingEffect role={role} />
      </S.InfoRole>
    </S.SectionInfoWrap>
  );
};

export default SectionInfo;
