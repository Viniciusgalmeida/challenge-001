import { Meta, StoryFn } from '@storybook/react';
import Heading from './heading';
import './heading.scss';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    additionalText: { control: 'text' },
  },
} as Meta<typeof Heading>;

const Template: StoryFn<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Find People',
  subtitle: 'Jennie Nichols',
  additionalText: 'Miss',
};

export const WithDifferentText = Template.bind({});
WithDifferentText.args = {
  title: 'New Custom Title for testing',
  subtitle: 'Subtitle Changed to Test',
  additionalText: 'Optional Additional Text for testing',
};
