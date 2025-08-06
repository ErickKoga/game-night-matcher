import { Button } from '@gnm/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Defines the color and border of the button',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'primary' },
        type: { summary: 'primary | secondary | outline | ghost' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Defines the size of the button',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'md' },
        type: { summary: 'sm | md | lg' },
      },
    },
    children: {
      control: 'text',
      description: 'Button label or content',
      table: {
        category: 'Content',
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes for the button',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Indicates whether the button is in a loading state',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Button',
  },
};
