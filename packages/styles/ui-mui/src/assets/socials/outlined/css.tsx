import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CssIcon({ linearColor = "#1F1F1F", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"file_type_css"}</title>
      <polygon
        points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201"
        style={{
          fill: "#1572b6",
        }}
      />
      <polygon
        points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858"
        style={{
          fill: "#33a9dc",
        }}
      />
      <polygon
        points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191"
        style={{
          fill: "#fff",
        }}
      />
      <polygon
        points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218"
        style={{
          fill: "#ebebeb",
        }}
      />
      <polygon
        points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151"
        style={{
          fill: "#fff",
        }}
      />
      <polygon
        points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935"
        style={{
          fill: "#ebebeb",
        }}
      />
      <polygon
        points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191"
        style={{
          fill: "#ebebeb",
        }}
      />
    </SvgIcon>
  );
}

export default CssIcon;
