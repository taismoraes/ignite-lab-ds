import { Meta, StoryObj } from "@storybook/react";
import { Link, LinkProps } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  args: { text: "Remember me" },
} as Meta<LinkProps>;

export const Default: StoryObj<LinkProps> = {};
