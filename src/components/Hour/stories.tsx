import { Meta, Story } from '@storybook/react/types-6-0';
import { Hour, HourProps } from '.';

export default {
  title: 'Hour',
  component: Hour,
} as Meta<HourProps>;

export const Template: Story<HourProps> = (args) => {
  return (
    <div>
      <Hour {...args} />
    </div>
  );
};
