import { Meta, Story } from '@storybook/react/types-6-0';
import { OffersTable, OffersTableProps } from '.';

export default {
  title: 'OffersTable',
  component: OffersTable,
  args: {
    Offers: [
      {
        firstArgument: 'Promoção',
        secondArgument: 'Descrição',
        thirdArgument: 'Valor',
      },
      {
        firstArgument: 'Promo1',
        secondArgument: 'teste',
        thirdArgument: 'teste',
      },
    ],
  },
} as Meta<OffersTableProps>;

export const Template: Story<OffersTableProps> = (args) => {
  return (
    <div>
      <OffersTable {...args} />
    </div>
  );
};
