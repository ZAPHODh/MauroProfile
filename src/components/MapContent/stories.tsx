import { Meta, Story } from '@storybook/react/types-6-0';
import { MapContent, MapContentProps } from '.';

export default {
  title: 'MapContent',
  component: MapContent,
} as Meta<MapContentProps>;

export const Template: Story<MapContentProps> = (args) => {
  return (
    <div>
      <MapContent {...args} />
    </div>
  );
};
