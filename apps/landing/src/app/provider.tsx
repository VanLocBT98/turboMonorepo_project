"use client";

import { MuiReactProvider } from "@core/providers";
import { ReactQueryProvider, ReduxRegistry } from "@libs/configs";
import { PaletteMode } from "@mui/material";

import { LicenseInfo } from "@mui/x-license";
import React from "react";

// Register MUI X license key
LicenseInfo.setLicenseKey(process.env.NEXT_PUBLIC_MUI_X_LICENSE_KEY);

interface RootProviderProps {
  children?: React.ReactNode;
  mode?: PaletteMode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children, mode }) => {
  return (
    <MuiReactProvider themeOptions={{}} defaultMode={mode}>
      <ReactQueryProvider>
        <ReduxRegistry>{children}</ReduxRegistry>
      </ReactQueryProvider>
    </MuiReactProvider>
  );
};

export default RootProvider;
