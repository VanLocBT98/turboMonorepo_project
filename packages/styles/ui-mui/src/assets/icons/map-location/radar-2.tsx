import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function Radar2Icon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        d="M21.6592 14.5877L20.9348 14.3936L21.6592 14.5877ZM9.41179 21.6588L9.21767 22.3833L9.41179 21.6588ZM2.34072 9.41136L1.61628 9.21725L2.34072 9.41136ZM14.5882 2.34029L14.3941 3.06474L14.5882 2.34029ZM11.5281 12.5825C11.8501 12.8431 12.3224 12.7934 12.583 12.4714C12.8435 12.1494 12.7938 11.6772 12.4718 11.4166L11.5281 12.5825ZM5.00191 6.33546L5.47376 5.75248H5.47376L5.00191 6.33546ZM3.63593 6.5135L3.00872 6.10226L3.63593 6.5135ZM6.71831 2.63651C6.35755 2.84004 6.23009 3.29749 6.43362 3.65825C6.63716 4.01901 7.0946 4.14647 7.45536 3.94294L6.71831 2.63651ZM9.86581 5.5941C9.47282 5.72498 9.26033 6.14967 9.39122 6.54266C9.5221 6.93565 9.94678 7.14813 10.3398 7.01725L9.86581 5.5941ZM20.9348 14.3936C19.6126 19.3282 14.5405 22.2566 9.6059 20.9344L9.21767 22.3833C14.9524 23.9199 20.8471 20.5166 22.3837 14.7819L20.9348 14.3936ZM9.6059 20.9344C4.67134 19.6122 1.74295 14.54 3.06517 9.60548L1.61628 9.21725C0.0796522 14.952 3.48291 20.8466 9.21767 22.3833L9.6059 20.9344ZM14.3941 3.06474C19.3286 4.38695 22.257 9.45907 20.9348 14.3936L22.3837 14.7819C23.9203 9.0471 20.517 3.15247 14.7823 1.61585L14.3941 3.06474ZM12.4718 11.4166L5.47376 5.75248L4.53006 6.91843L11.5281 12.5825L12.4718 11.4166ZM3.06517 9.60548C3.3276 8.62605 3.73713 7.72696 4.26313 6.92474L3.00872 6.10226C2.3963 7.0363 1.92054 8.08173 1.61628 9.21725L3.06517 9.60548ZM7.45536 3.94294C9.49125 2.79434 11.9587 2.41218 14.3941 3.06474L14.7823 1.61585C11.9525 0.857612 9.08232 1.3028 6.71831 2.63651L7.45536 3.94294ZM5.47376 5.75248C4.74051 5.159 3.58273 5.22681 3.00872 6.10226L4.26313 6.92474C4.28531 6.8909 4.31608 6.87118 4.3615 6.86569C4.41138 6.85966 4.47422 6.87323 4.53006 6.91843L5.47376 5.75248ZM17.25 11.9996C17.25 14.899 14.8995 17.2496 12 17.2496V18.7496C15.7279 18.7496 18.75 15.7275 18.75 11.9996H17.25ZM12 17.2496C9.10048 17.2496 6.74998 14.899 6.74998 11.9996H5.24998C5.24998 15.7275 8.27206 18.7496 12 18.7496V17.2496ZM12 6.74955C14.8995 6.74955 17.25 9.10006 17.25 11.9996H18.75C18.75 8.27163 15.7279 5.24955 12 5.24955V6.74955ZM6.74998 11.9996C6.74998 10.7308 7.19906 9.569 7.94769 8.6614L6.79055 7.70693C5.82847 8.8733 5.24998 10.3699 5.24998 11.9996H6.74998ZM10.3398 7.01725C10.8606 6.84379 11.4185 6.74955 12 6.74955V5.24955C11.2554 5.24955 10.5375 5.37039 9.86581 5.5941L10.3398 7.01725Z"
        fill={linearColor}
      />
    </SvgIcon>
  );
}

export default Radar2Icon;
