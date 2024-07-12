import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Templates = ({ children }: Props) => {
  return (
    <div>
      <h1>templates</h1>
      {children}
    </div>
  );
};
