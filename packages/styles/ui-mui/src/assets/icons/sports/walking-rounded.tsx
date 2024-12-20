import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function WalkingRoundedIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <circle
        cx="12.5"
        cy="4.5"
        r="2.5"
        stroke={linearColor}
        strokeWidth="1.5"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 22l.51-.407A6.999 6.999 0 0010 17.5"
      />
      <path
        fill={linearColor}
        d="M11.158 13.418l.747.074-.747-.074zm.813 2.841l.594-.458-.594.458zm3.836 6.2a.75.75 0 101.187-.917l-1.187.916zM10.97 10.015l-.04-.749.04.75zm2.117.116l-.107.742.107-.742zm4.11 3.168l-.123-.74.123.74zm1.926.44a.75.75 0 10-.246-1.48l.246 1.48zm-3.507-1.391l.712-.237-.712.237zM6.25 14.5a.75.75 0 001.5 0h-1.5zm4.504-4.575l-.342 3.418 1.492.15.342-3.418-1.492-.15zm.623 6.792l4.43 5.741 1.187-.916-4.429-5.741-1.188.916zM11.5 9.25c-.178 0-.371.006-.57.017l.08 1.498c.181-.01.346-.015.49-.015v-1.5zm0 1.5c.454 0 .976.051 1.48.124l.214-1.485c-.54-.077-1.14-.139-1.694-.139v1.5zm5.82 3.29l1.803-.3-.246-1.48-1.803.3.246 1.48zm-4.34-3.166c.882.127 1.617.79 1.925 1.712l1.423-.474c-.46-1.382-1.613-2.504-3.134-2.723l-.214 1.485zm-2.05-1.607c-2.766.15-4.68 2.592-4.68 5.233h1.5c0-1.976 1.416-3.635 3.26-3.735l-.08-1.498zm3.975 3.319a2.17 2.17 0 002.415 1.454l-.246-1.48a.67.67 0 01-.746-.448l-1.423.474zm-4.493.757c-.072.723-.14 1.283.013 1.822l1.442-.413c-.056-.198-.047-.42.037-1.26l-1.492-.149zm2.153 2.458c-.515-.668-.64-.851-.698-1.05l-1.442.414c.154.538.508.977.952 1.552l1.188-.916z"
      />
    </SvgIcon>
  );
}

export default WalkingRoundedIcon;
