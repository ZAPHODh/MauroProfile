import { Meta, Story } from '@storybook/react/types-6-0';
import { CountDown, CountDownProps } from '.';

export default {
  title: 'CountDown',
  component: CountDown,
} as Meta<CountDownProps>;

export const Template: Story<CountDownProps> = (args) => {
  return (
    <div>
      <CountDown {...args} />
    </div>
  );
};
