"use client";
import DisplayLottie from "@/components/molecules/DisplayLottie";
import { Button, Grid } from "@mui/material";
import { FileDownloadIcon } from "@styles/ui-mui/icons";
import Link from "next/link";
import React from "react";
import * as S from "./styles";

export interface ISectionSummaryProps {
  summary: string[];
  resume: string;
  socials: { name: string; link: string; icon: React.ReactNode }[];
}

const SectionSummary: React.FC<ISectionSummaryProps> = ({
  summary,
  resume,
  socials,
}) => {
  return (
    <S.SummaryWrap>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <S.SummaryContent>
            {summary.map((item, index) => (
              <p key={item + index}>{item}</p>
            ))}
          </S.SummaryContent>
          <S.SummaryResume>
            <S.SummaryResumeLink href={resume} target="_blank">
              <S.SummaryResumeBtn variant="outlined">
                <span>Check My Resume</span>{" "}
                <FileDownloadIcon fontSize="large" />
              </S.SummaryResumeBtn>
            </S.SummaryResumeLink>
          </S.SummaryResume>
          <S.SummarySocials>
            {socials.map((item, index) => (
              <Link href={item.link} key={`social-${index}`} target="_blank">
                <Button variant="outlined" aria-label={item.name}>
                  {item.icon}
                </Button>
              </Link>
            ))}
          </S.SummarySocials>
        </Grid>
        <Grid item xs={12} lg={6}>
          <DisplayLottie animationPath="/lottie/coding.json" />
        </Grid>
      </Grid>
    </S.SummaryWrap>
  );
};

export default SectionSummary;
