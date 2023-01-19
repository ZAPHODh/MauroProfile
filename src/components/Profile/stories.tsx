import { Meta, Story } from '@storybook/react/types-6-0';
import { Profile, ProfileProps } from '.';

export default {
  title: 'Profile',
  component: Profile,
} as Meta<ProfileProps>;

export const Template: Story<ProfileProps> = (args) => {
  return (
    <div>
      <Profile {...args} />
    </div>
  );
};
