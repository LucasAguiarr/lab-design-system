import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = { args: { size: 'sm' } };
export const Medium: StoryObj<HeadingProps> = { args: { size: 'md' } };
export const Large: StoryObj<HeadingProps> = { args: { size: 'lg' } };

export const CustomComponent: StoryObj<HeadingProps> = {
  args: { asChild: true, children: <h1>Heading with h1 tag</h1> },

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
          h1: <h1>Heading with h1 tag</h1>,
          h2: <h2>Heading with h2 tag</h2>,
          h3: <h3>Heading with h3 tag</h3>,
          h4: <h4>Heading with h4 tag</h4>,
          h5: <h5>Heading with h5 tag</h5>,
          h6: <h6>Heading with h6 tag</h6>,
          p: <p>Heading with p tag</p>,
          a: <a>Heading with a tag</a>,
          span: <span>Heading with span tag</span>,
        },
      },
    },
    asChild: { table: { disable: true } },
  },
};
