import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello world',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>;

export const Small: StoryObj<TextProps> = { args: { size: 'sm' } };
export const Medium: StoryObj<TextProps> = { args: { size: 'md' } };
export const Large: StoryObj<TextProps> = { args: { size: 'lg' } };

export const CustomComponent: StoryObj<TextProps> = {
  args: { asChild: true, children: <p>Text with p tag</p> },

  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      control: {
        type: 'select',
        options: {
          h1: <h1>Text with h1 tag</h1>,
          h2: <h2>Text with h2 tag</h2>,
          h3: <h3>Text with h3 tag</h3>,
          h4: <h4>Text with h4 tag</h4>,
          h5: <h5>Text with h5 tag</h5>,
          h6: <h6>Text with h6 tag</h6>,
          p: <p>Text with p tag</p>,
          a: <a>Text with a tag</a>,
          span: <span>Text with span tag</span>,
        },
      },
    },
    asChild: { table: { disable: true } },
  },
};
