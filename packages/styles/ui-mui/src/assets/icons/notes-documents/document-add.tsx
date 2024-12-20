import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function DocumentAddIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeWidth="1.5"
        d="M18.18 8.04l.463-.464a1.966 1.966 0 112.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853 1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592-.146.188-.271.39-.374.606-.087.182-.151.375-.28.762l-.413 1.24-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558-.188.146-.39.271-.606.374-.182.087-.375.151-.762.28l-1.24.413-.401.134m0 0l-.401.134a.53.53 0 01-.67-.67l.133-.402m.938.938l-.938-.938"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 13h2.5M8 9h6.5M8 17h1.5M19.828 3.172C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172 3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172.944-.943 1.127-2.348 1.163-4.828"
      />
    </SvgIcon>
  );
}

export default DocumentAddIcon;
