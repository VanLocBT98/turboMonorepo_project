import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function VolumeCrossIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        fill={linearColor}
        d="M16.25 12a.75.75 0 00-1.5 0h1.5zM7.016 6.958l.125.74-.125-.74zM8.6 6.22l-.413-.626.413.626zm-.871.524l.303.687-.303-.687zM3.34 16.723l-.315.68.315-.68zm-1.805-3.695l-.749.046.749-.046zm.424 2.395l.66-.356-.66.356zM13.7 20.075l-.242-.71.242.71zm1.713-5.47l.749.035-.75-.035zM14.28 19.78l.43.613-.43-.613zM8.818 6.076l.413.626-.413-.626zM13.7 3.925l-.242.71.242-.71zm.58.295l.43-.614-.43.614zM3.34 7.277l-.315-.68.315.68zm-1.805 3.694l-.749-.045.749.045zm.424-2.394l.66.356-.66-.356zm7.952 9.168A.75.75 0 009.09 19l.822-1.255zM9.012 6.846l.22-.144-.827-1.252-.219.144.826 1.252zm-6.729 6.137c-.02-.347-.033-.68-.033-.983H.75c0 .341.014.706.036 1.074l1.497-.091zM2.25 12c0-.303.012-.636.033-.983l-1.497-.091A17.87 17.87 0 00.75 12h1.5zm12.5 0c0 .512-.034 1.45-.086 2.57l1.498.07c.052-1.115.088-2.088.088-2.64h-1.5zM6 7.75c.488 0 .817.002 1.141-.053l-.25-1.479c-.171.03-.354.032-.89.032v1.5zm2.186-2.156c-.447.295-.602.394-.76.464l.605 1.373c.3-.133.574-.316.981-.585l-.826-1.252zM7.141 7.697a3.75 3.75 0 00.89-.266l-.606-1.373c-.17.076-.35.13-.534.16l.25 1.48zM6.001 17.75c.536 0 .719.002.89.031l.25-1.479c-.324-.055-.653-.052-1.14-.052v1.5zm0-1.5c-1.445 0-1.932-.017-2.346-.208l-.63 1.361c.784.363 1.67.347 2.975.347v-1.5zM.785 13.074c.07 1.153.104 1.947.512 2.704l1.32-.711c-.217-.405-.258-.82-.335-2.084l-1.497.09zm2.869 2.968a2.47 2.47 0 01-1.036-.975l-1.32.711a3.962 3.962 0 001.726 1.625l.63-1.361zm11.009-1.472c-.072 1.531-.123 2.603-.262 3.378-.14.771-.337 1.066-.553 1.218l.862 1.227c.706-.496 1.005-1.28 1.167-2.18.161-.895.215-2.086.284-3.573l-1.498-.07zm-.722 6.215a3.07 3.07 0 00.769-.392l-.863-1.227a1.568 1.568 0 01-.39.199l.484 1.42zM9.232 6.702c1.289-.85 2.194-1.446 2.908-1.792.712-.346 1.069-.36 1.318-.275l.484-1.42c-.818-.28-1.631-.056-2.457.345-.824.4-1.826 1.063-3.08 1.89l.826 1.252zm4.226-2.067c.137.047.272.115.39.198l.863-1.227a3.066 3.066 0 00-.769-.39l-.484 1.419zM6 6.25c-1.304 0-2.19-.016-2.975.346l.63 1.362c.414-.192.901-.208 2.345-.208v-1.5zm-3.717 4.767c.077-1.264.118-1.68.336-2.084l-1.32-.712C.89 8.979.855 9.772.785 10.926l1.497.091zm.742-4.42A3.962 3.962 0 001.298 8.22l1.32.712a2.47 2.47 0 011.037-.975l-.63-1.362zM9.089 19c1.039.68 1.899 1.224 2.631 1.549.743.328 1.48.489 2.222.236l-.484-1.42c-.226.077-.54.074-1.13-.188-.602-.266-1.358-.738-2.417-1.432L9.09 19zm7.034-10.46c-.06-1.227-.127-2.233-.296-3.01-.172-.789-.477-1.474-1.116-1.924l-.863 1.227c.196.138.377.392.513 1.016.139.635.202 1.514.264 2.765l1.498-.074z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 18s1.5-1.8 1.5-6c0-2.433-.503-4.061-.927-5M18 15s.5-.9.5-3c0-.862-.084-1.522-.183-2M22 2L2 22"
      />
    </SvgIcon>
  );
}

export default VolumeCrossIcon;