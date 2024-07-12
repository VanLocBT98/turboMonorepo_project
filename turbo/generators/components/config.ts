import { PlopGeneratorConfig } from "node-plop";

export const componentConfig: PlopGeneratorConfig = {
  description: "Create a new component",
  prompts: [
    {
      type: "list",
      name: "project",
      message: "Select the project",
      choices: ["portfolio", "otherProject1", "otherProject2"], // Add your project names here
    },
    {
      type: "input",
      name: "name",
      message: "Component name:",
    },
    {
      type: "list",
      name: "componentType",
      message: "Select the type of component",
      choices: ["atoms", "molecules", "organisms", "templates"],
    },
  ],
  actions: [
    {
      type: "add",
      path: "apps/{{ project }}/src/components/{{ componentType }}/{{ name }}/styles.ts",
      templateFile: "components/news/styles.ts.hbs",
    },
    {
      type: "add",
      path: "apps/{{ project }}/src/components/{{ componentType }}/{{ name }}/index.stories.tsx",
      templateFile: "components/news/index.stories.tsx.hbs",
    },
    {
      type: "add",
      path: "apps/{{ project }}/src/components/{{ componentType }}/{{ name }}/index.tsx",
      templateFile: "components/news/index.tsx.hbs",
    },
  ],
};
