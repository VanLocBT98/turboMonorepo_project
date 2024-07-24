"use client";
import MouseBlob from "@/components/atoms/MouseBlob";
import DisplayLottie from "@/components/molecules/DisplayLottie";
import React from "react";
import * as S from "./styles";

export interface ISectionExperienceProps {
  experiences: {
    company: string[];
    position: string[];
    startDate: string;
    endDate: string;
    responsibilities: string[];
    techStacks: { title: string; keys: string }[];
  }[];
}

const SectionExperience: React.FC<ISectionExperienceProps> = ({
  experiences,
}) => {
  function concatenateWithAnd(items: string[], prefix: string = "&"): string {
    return items
      .map((com, index) =>
        com ? (index > 0 ? ` ${prefix} ` + com : com) : com,
      )
      .join("");
  }
  return (
    <S.SecExpWrap>
      <S.SecExpTitle variant="h3" color="white">
        Experiences
      </S.SecExpTitle>
      <S.SecExpList>
        {experiences.map((exp, index) => (
          <MouseBlob key={`exp-${index}`} borderWidth={4} radius={24}>
            <S.SecExpItem>
              <S.SecExpHeadline>
                <S.SecExpCompany>
                  {concatenateWithAnd(exp.company)}
                </S.SecExpCompany>
                <span>
                  &nbsp;&#x2022;&nbsp;{concatenateWithAnd(exp.position, "/")}
                  &nbsp;&#x2022;&nbsp;
                </span>
                <S.SecExpDate>
                  {exp.startDate} - {exp.endDate}
                </S.SecExpDate>
              </S.SecExpHeadline>
              <S.SecExpResList aria-label="⚝ Responsibilities:">
                {exp.responsibilities.map((res, index) => (
                  <li key={`${concatenateWithAnd(exp.company)}-${index}`}>
                    {res}
                  </li>
                ))}
              </S.SecExpResList>
              {exp.techStacks.map((item) => (
                <S.SecExpOther key={item.title}>
                  <S.SecExpOtherTitle>
                    &#9885;&nbsp;{item.title}
                  </S.SecExpOtherTitle>
                  &nbsp;{item.keys}
                </S.SecExpOther>
              ))}
            </S.SecExpItem>
          </MouseBlob>
        ))}
      </S.SecExpList>
      <S.SecExpWrapLottie>
        <DisplayLottie animationPath="/lottie/build.json" />
      </S.SecExpWrapLottie>
    </S.SecExpWrap>
  );
};

export default SectionExperience;
