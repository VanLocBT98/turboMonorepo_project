import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CallCancelIcon({
  linearColor = "#1C274C",
  ...props
}: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 4l-4 4m0-4l4 4"
      />
      <path
        fill={linearColor}
        d="M15.1 15.027l-.543-.516.544.516zm.456-.48l.544.517-.544-.516zm2.417-.335l-.374.65.374-.65zm1.91 1.1l-.374.65.374-.65zm.539 3.446l.543.517-.543-.517zm-1.42 1.496l-.545-.517.544.517zm-1.326.71l.074.745-.074-.746zm-9.86-4.489l.543-.516-.544.516zm-4.813-9.51l-.749.041.749-.04zm6.475 1.538l.543.517-.543-.517zm.156-2.81l.613-.433-.613.433zM8.374 3.91l-.613.433.612-.433zM5.26 3.609l.544.516-.544-.516zM3.691 5.26l-.543-.516.544.516zm7.372 7.795l.544-.517-.544.517zm4.582 2.488l.455-.48-1.088-1.033-.455.48 1.088 1.033zm1.954-.682l1.91 1.1.748-1.3-1.91-1.1-.748 1.3zm2.279 3.38l-1.42 1.495 1.087 1.034 1.42-1.496-1.087-1.033zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717l-.147-1.492zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986l1.087-1.033zm1.376-6.637l.286-.302-1.087-1.033-.287.302 1.088 1.033zm.512-4.062L8.986 3.477l-1.225.866 1.26 1.783 1.226-.866zm-5.53-2.168L3.149 4.745l1.088 1.033 1.57-1.653-1.088-1.033zm4.474 5.713c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003a.822.822 0 00-.05.058 1.592 1.592 0 00-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.249.249 0 01-.028.037.705.705 0 01-.018.02s-.002 0-.545-.516zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.52 1.52 0 00.421-.25.922.922 0 00.036-.034l.014-.014a.369.369 0 00.007-.006l.003-.003.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001.002-.003a.241.241 0 00.005-.005l.01-.01a.446.446 0 01.037-.032c.01-.006.009-.004-.004.001-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929l-1.088 1.033zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218l1.225-.866zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261l1.498-.08zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939l-1.088-1.032zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86L10.02 9.02zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613l-.749 1.3zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47l1.088 1.032z"
      />
    </SvgIcon>
  );
}

export default CallCancelIcon;
