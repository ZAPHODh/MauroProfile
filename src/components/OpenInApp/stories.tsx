import { Meta, Story } from '@storybook/react/types-6-0';
import { OpenInApp, OpenInAppProps } from '.';

export default {
  title: 'OpenInApp',
  component: OpenInApp,
} as Meta<OpenInAppProps>;

export const Template: Story<OpenInAppProps> = (args) => {
  return (
    <div>
      <OpenInApp {...args} />
    </div>
  );
};
