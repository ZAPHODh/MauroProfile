import { Meta, Story } from '@storybook/react/types-6-0';
import { SocialMedia, SocialMediaProps } from '.';

export default {
  title: 'SocialMedia',
  component: SocialMedia,
} as Meta<SocialMediaProps>;

export const Template: Story<SocialMediaProps> = (args) => {
  return (
    <div>
      <SocialMedia {...args} />
    </div>
  );
};
