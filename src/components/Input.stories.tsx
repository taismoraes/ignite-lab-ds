import { Input, InputRootProps } from "./Input";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/Input",
  component: Input.Root,
  args: {
    children: [
      <Input.Icon>
        <Envelope />
      </Input.Icon>,
      <Input.Input placeholder="eleven@strangerthings.com.br" type="email" />,
    ],
  },
  argTypes: {},
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {
  argTypes: {
    children: { table: { disable: true } },
  },
};

export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: <Input.Input placeholder="Input without icon" />,
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};
