import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PcIcon from "./index";

export default {
  title: "Components/PcIcon",
  component: PcIcon,
} as Meta;

export const Default: StoryObj = {
  args: {
    name: "home",
    size: 32,
    color: "blue",
  },
};
