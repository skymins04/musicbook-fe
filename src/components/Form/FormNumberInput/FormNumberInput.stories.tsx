import type { Meta, StoryObj } from "@storybook/react";

import { ControlledFormNumberInput, FormNumberInput } from "./FormNumberInput";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof FormNumberInput> = {
  title: "Common/Form/FormNumberInput",
  component: FormNumberInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormNumberInput>;

export const Default: Story = {
  args: {
    inputClassName: "w-[250px]",
    placeholder: "Placeholder",
  },
  render(args) {
    return <FormNumberInput {...args} />;
  },
};

export const Controlled: Story = {
  args: {
    inputClassName: "w-[250px]",
    placeholder: "Placeholder",
  },
  render(args) {
    const formMethods = useForm({
      mode: "all",
    });

    return (
      <FormProvider {...formMethods}>
        <ControlledFormNumberInput name="test" option={args} />
      </FormProvider>
    );
  },
};
