import { Button, ButtonProps } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create Account",
  },
  argTypes: {},
  decorators: [withDesign],
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

const Template: ComponentStory<typeof Button> = () => <Button>Teste</Button>;

export const Example = Template.bind({});
Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/y6CIvws1rHXJoWq0q2hgt2/Ignite-Lab-Design-System?node-id=1%3A170&t=LsEKNGgv7Ie5HLJK-0",
  },
};
