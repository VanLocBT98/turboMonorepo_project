import React from "react";

import { SvgIcon, SvgIconOwnProps } from "@mui/material";

function CupPaperIcon({ linearColor = "#1C274C", ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className="linear">
      <path
        fill={linearColor}
        d="M20.173 5.86l.711-.237-.711.238zm.036.108l-.712.237.712-.237zm-16.418 0l.712.237-.712-.237zm.036-.107l-.711-.238.711.238zM7 18.58l-.742.108L7 18.58zm10.002 0l.742.108L17 18.58zM3.48 7.761l.68-.317-.68.317zm.22.303l.515-.544-.516.544zm16.817-.303l.68.317-.68-.317zm-.218.303l-.516-.544.516.544zm-2.006-5.62l.393-.64-.393.64zm.356.256l-.482.575.482-.575zM7.92 21.513l-.49.568.49-.568zM5.707 2.444l-.393-.639.393.64zm-.356.257l.482.575L5.35 2.7zm3.835.049h5.63v-1.5h-5.63v1.5zm10.276 3.348l.036.107 1.423-.474-.036-.108-1.423.475zm-14.958.107l.036-.107-1.423-.475-.036.108 1.423.474zm6.454 16.545h2.086v-1.5h-2.086v1.5zM18.5 7.59h-13v1.5h13v-1.5zm-13.742.858l1.5 10.24 1.483-.217L6.242 8.23l-1.484.217zm12.985 10.24l1.5-10.24-1.485-.217-1.5 10.24 1.485.217zm-4.7 4.062c.805 0 1.479.001 2.019-.067.561-.07 1.072-.226 1.508-.602l-.981-1.135c-.127.11-.31.198-.715.249-.425.054-.987.055-1.831.055v1.5zm3.216-4.28c-.122.836-.205 1.392-.32 1.805-.109.392-.223.56-.35.67l.98 1.136c.437-.377.664-.86.815-1.405.146-.525.242-1.192.359-1.988l-1.484-.217zM3.079 5.73c-.152.46-.29.868-.36 1.206-.071.347-.102.747.083 1.143l1.36-.634c.015.034-.02.016.026-.206.048-.23.15-.538.315-1.034L3.08 5.731zM5.5 7.59c-.523 0-.847-.002-1.08-.03-.225-.026-.232-.065-.204-.04L3.184 8.61c.317.3.707.398 1.058.44.343.04.774.04 1.258.04v-1.5zm-2.698.489c.093.2.223.38.382.53l1.032-1.088a.25.25 0 01-.055-.076l-1.36.634zm16.695-1.874c.166.496.267.804.315 1.034.045.222.01.24.027.206l1.36.634c.184-.396.153-.796.082-1.143-.07-.338-.208-.746-.36-1.205l-1.424.474zM18.5 9.09c.484 0 .915.002 1.258-.04.351-.04.74-.139 1.058-.44l-1.032-1.088c.028-.026.02.013-.203.04-.234.027-.558.028-1.081.028v1.5zm1.339-1.644a.249.249 0 01-.055.076l1.032 1.089c.16-.152.29-.332.382-.531l-1.36-.634zM14.815 2.75c.934 0 1.579 0 2.082.052.488.049.775.14 1.004.281l.786-1.278c-.493-.303-1.027-.434-1.639-.496-.596-.06-1.33-.059-2.233-.059v1.5zm6.07 2.873c-.287-.857-.518-1.553-.764-2.1-.252-.56-.545-1.025-.99-1.397l-.963 1.15c.207.173.384.416.585.863.208.461.413 1.073.708 1.959l1.423-.475zM17.9 3.083c.094.058.183.122.267.193l.964-1.15a3.752 3.752 0 00-.445-.32l-.786 1.277zM10.957 21.25c-.844 0-1.407-.001-1.831-.055-.404-.05-.588-.14-.715-.25l-.98 1.136c.435.377.946.532 1.507.602.54.068 1.214.067 2.019.067v-1.5zm-4.7-2.562c.117.796.213 1.463.359 1.988.151.545.378 1.028.814 1.405l.981-1.135c-.127-.11-.241-.279-.35-.671-.115-.413-.197-.97-.32-1.804l-1.484.217zM9.185 1.25c-.904 0-1.637 0-2.233.06-.612.061-1.146.192-1.639.495l.786 1.278c.23-.14.516-.232 1.004-.281.503-.051 1.148-.052 2.082-.052v-1.5zM4.54 6.098c.295-.886.5-1.498.708-1.959.2-.447.378-.69.585-.863l-.964-1.15c-.443.372-.737.837-.99 1.398-.245.546-.476 1.242-.762 2.1l1.423.474zm.774-4.293a3.75 3.75 0 00-.445.32l.964 1.15a2.25 2.25 0 01.267-.192l-.786-1.278z"
      />
      <path
        stroke={linearColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6.5 12h11M7 17h10"
      />
    </SvgIcon>
  );
}

export default CupPaperIcon;
