export default function plopfile(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("feature", {
    description: "Create a new feature component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the feature component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/feature/feature.tsx.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/presentations/index.stories.tsx",
        templateFile: "plop-templates/feature/presentations/feature.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/presentations/index.module.scss",
        templateFile: "plop-templates/feature/presentations/feature.module.scss.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/presentations/index.tsx",
        templateFile: "plop-templates/feature/presentations/feature.tsx.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/hooks/index.ts",
        templateFile: "plop-templates/feature/hooks/feature.ts.hbs",
      },
    ],
  });
  plop.setGenerator("ui", {
    description: "Create a new ui component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the ui component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/ui/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/ui/ui.tsx.hbs",
      },
      {
        type: "add",
        path: "src/ui/{{pascalCase name}}/index.stories.tsx",
        templateFile: "plop-templates/ui/ui.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/ui/{{pascalCase name}}/index.module.scss",
        templateFile: "plop-templates/ui/ui.module.scss.hbs",
      },
    ],
  });
  plop.setGenerator("screen", {
    description: "Create a new screen component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the screen component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/screen/screen.tsx.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/index.module.scss",
        templateFile: "plop-templates/screen/screen.module.scss.hbs",
      },
    ],
  });
}
