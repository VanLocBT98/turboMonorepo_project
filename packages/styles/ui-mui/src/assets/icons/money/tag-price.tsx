import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function TagPriceIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M4.729 16.137c-1.546-1.546-2.319-2.318-2.606-3.321-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.234-3.302.613-.613 1.509-.82 3.3-1.233l1.229-.284c2.13-.491 3.194-.737 4.197-.45 1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.671-1.344 3.015-4.033 5.704-2.69 2.69-4.034 4.034-5.705 4.034-1.67 0-3.015-1.345-5.704-4.034l-1.83-1.83z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15.39 15.39c.585-.587.664-1.457.176-1.946-.488-.488-1.359-.409-1.945.177-.585.586-1.456.665-1.944.177-.488-.488-.409-1.359.177-1.944m3.535 3.535l.354.354m-.354-.354c-.4.401-.935.565-1.389.471m-2.5-4.36l.354.354m0 0c.331-.332.753-.5 1.146-.497"
      />
      <circle
        cx="8.607"
        cy="8.879"
        r="2"
        stroke={linearColor}
        strokeWidth="1.5"
        transform="rotate(-45 8.607 8.879)"
      />
    </SvgIcon>
  );
}

export default TagPriceIcon;
