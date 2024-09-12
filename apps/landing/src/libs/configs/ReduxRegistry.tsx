"use client";

import { store } from "@stores/index";
import { Provider } from "react-redux";

export function ReduxRegistry({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
