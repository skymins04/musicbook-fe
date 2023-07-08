import type { Meta, StoryObj } from "@storybook/react";

import { ControlledFormInput, FormInput } from "./FormInput";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof FormInput> = {
  title: "Common/Form/FormInput",
  component: FormInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    inputClassName: "w-[250px]",
    placeholder: "Placeholder",
  },
  render(args) {
    return <FormInput {...args} onClear={() => {}} />;
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
        <ControlledFormInput name="test" option={args} />
      </FormProvider>
    );
  },
};
