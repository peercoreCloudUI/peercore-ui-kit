import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Primary: StoryObj = {
  args: {
    label: "Click Me",
  },
};
