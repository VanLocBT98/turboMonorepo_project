import { PlopTypes } from "@turbo/gen";
import { componentConfig } from "./components/config";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", componentConfig);
}
