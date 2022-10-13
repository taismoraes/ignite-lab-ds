import { themes } from "@storybook/theming";
import "../src/styles/global.css";
import { initialize, mswDecorator } from "msw-storybook-addon";

//initialize msw
initialize({ onUnhandledRequest: "bypass" });

//provide the msw addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
