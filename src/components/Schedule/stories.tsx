import { Schedule } from '.';

export default {
  title: 'Schedule',
  component: Schedule,
};

export const Template = (args) => {
  return (
    <div>
      <Schedule {...args} />
    </div>
  );
};
