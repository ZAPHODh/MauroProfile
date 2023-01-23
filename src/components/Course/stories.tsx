import { Meta, Story } from '@storybook/react/types-6-0';
import { Course, CourseProps } from '.';

export default {
  title: 'Course',
  component: Course,
} as Meta<CourseProps>;

export const Template: Story<CourseProps> = (args) => {
  return (
    <div>
      <Course {...args} />
    </div>
  );
};
