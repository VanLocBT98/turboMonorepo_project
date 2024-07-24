"use client";
import MouseBlob from "@/components/atoms/MouseBlob";
import CardGithub from "@/components/molecules/CardGithub";
import { Grid } from "@mui/material";
import { MultipleForwardRightIcon } from "@styles/ui-mui/icons";
import React from "react";
import * as S from "./styles";

export interface ISectionProjectProps {
  projects: { title: string; desc: string }[];
  moreLink: string;
}

const SectionProject: React.FC<ISectionProjectProps> = ({
  projects,
  moreLink,
}) => {
  return (
    <S.SecProWrap>
      <S.SecProTitle variant="h3" color="white">
        Projects
      </S.SecProTitle>
      <Grid container spacing={3}>
        {projects.map((pro) => (
          <Grid item xs={6} key={pro.title}>
            <MouseBlob borderWidth={4} radius={16}>
              <CardGithub {...pro} />
            </MouseBlob>
          </Grid>
        ))}
      </Grid>
      <S.SecProMore href={moreLink} target="_blank">
        <span>More Project Here</span>
        <MultipleForwardRightIcon fontSize="large" />
      </S.SecProMore>
    </S.SecProWrap>
  );
};

export default SectionProject;
