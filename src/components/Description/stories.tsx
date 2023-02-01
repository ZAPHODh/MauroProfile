import { Meta, Story } from '@storybook/react/types-6-0';
import { Description, DescriptionProps } from '.';

export default {
  title: 'Description',
  component: Description,
} as Meta<DescriptionProps>;

export const Template: Story<DescriptionProps> = (args) => {
  return (
    <div>
      <Description {...args} />
    </div>
  );
};
