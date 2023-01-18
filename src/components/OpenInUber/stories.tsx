import { Meta, Story } from '@storybook/react/types-6-0';
import { OpenInUber, OpenInUberProps } from '.';

export default {
  title: 'OpenInUber',
  component: OpenInUber,
} as Meta<OpenInUberProps>;

export const Template: Story<OpenInUberProps> = (args) => {
  return (
    <div>
      <OpenInUber {...args} />
    </div>
  );
};
