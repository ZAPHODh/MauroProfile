import { Button } from 'components/Button';
import { useState } from 'react';
import * as Styled from './styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Heading } from 'components/Heading';
export type CourseProps = {
  course?: string;
  description?: string;
};

export const Course = ({
  course = 'Curso Prático',
  description = 'Mauro Chrisostimo, que hoje é uma referência quando o assunto é iluminado, estará mostrando TUDO. Todas as técnicas, desde a avaliação até a finalização, todas serão postas em prática nesse evento seleto para PROFISSIONAIS.',
}: CourseProps) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
    console.log(show);
  };
  return (
    <Styled.Wrapper>
      <Button onClick={handleClick}>
        Curso
        {show ? (
          <ArrowDropUpIcon fontSize="inherit" />
        ) : (
          <ArrowDropDownIcon fontSize="inherit" />
        )}
      </Button>
      <Styled.CourseContent show={show}>
        <Heading as="h3">{course}</Heading>
        {description}
      </Styled.CourseContent>
    </Styled.Wrapper>
  );
};
