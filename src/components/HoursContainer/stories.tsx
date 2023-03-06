import { Meta, Story } from '@storybook/react/types-6-0';
import { HoursContainer, HoursContainerProps } from '.';

export default {
  title: 'HoursContainer',
  component: HoursContainer,
} as Meta<HoursContainerProps>;

export const Template: Story<HoursContainerProps> = (args) => {
  return (
    <div>
      <HoursContainer {...args} />
    </div>
  );
};
