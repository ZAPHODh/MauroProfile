import { Meta, Story } from '@storybook/react/types-6-0';
import { CalendarComponent, CalendarComponentProps } from '.';

export default {
  title: 'CalendarComponent',
  component: CalendarComponent,
} as Meta<CalendarComponentProps>;

export const Template: Story<CalendarComponentProps> = (args) => {
  return (
    <div>
      <CalendarComponent {...args} />
    </div>
  );
};
