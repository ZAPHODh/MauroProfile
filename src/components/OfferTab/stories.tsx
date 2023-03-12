import { Meta, Story } from '@storybook/react/types-6-0';
import { OfferTab, OfferTabProps } from '.';

export default {
  title: 'OfferTab',
  component: OfferTab,
} as Meta<OfferTabProps>;

export const Template: Story<OfferTabProps> = (args) => {
  return (
    <div>
      <OfferTab {...args} />
    </div>
  );
};
