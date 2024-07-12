import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Comlict = ({ children }: Props) => {
  return (
    <div>
      <h1>comlict</h1>
      {children}
    </div>
  );
};
