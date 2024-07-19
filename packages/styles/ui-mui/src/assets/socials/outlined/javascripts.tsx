import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function JavascriptIcon({
  linearColor = "#1F1F1F",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <g>
          <path d="M0 0h50v50H0z" fill="#F7DF1E" />
          <path
            d="m13.147 41.784 3.826 -2.316c0.738 1.309 1.41 2.416 3.021 2.416 1.544 0 2.518 -0.604 2.518 -2.953v-15.976h4.699v16.043c0 4.867 -2.853 7.082 -7.015 7.082 -3.759 0 -5.941 -1.947 -7.048 -4.296"
            fill="#000000"
          />
          <path
            d="m29.762 41.28 3.826 -2.215c1.007 1.645 2.316 2.853 4.632 2.853 1.947 0 3.188 -0.973 3.188 -2.316 0 -1.611 -1.275 -2.182 -3.423 -3.121l-1.174 -0.504c-3.39 -1.443 -5.639 -3.255 -5.639 -7.081 0 -3.524 2.685 -6.209 6.88 -6.209 2.987 0 5.135 1.041 6.679 3.759L41.072 28.795c-0.806 -1.443 -1.678 -2.014 -3.021 -2.014 -1.376 0 -2.249 0.873 -2.249 2.014 0 1.41 0.873 1.98 2.886 2.853l1.175 0.503c3.994 1.712 6.243 3.457 6.243 7.384 0 4.229 -3.323 6.545 -7.787 6.545 -4.363 0 -7.182 -2.081 -8.558 -4.8"
            fill="#000000"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default JavascriptIcon;
