import { Button } from 'components/Button';
import { useState } from 'react';
import * as Styled from './styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Heading } from 'components/Heading';
export type CourseProps = {
  course?: string;
  description?: string;
  finalConsider?: string;
  id?: string;
};

export const Course = ({
  course = 'Curso Prático',
  description = 'Mauro Chrisostimo, que hoje é uma referência quando o assunto é iluminado, estará mostrando TUDO. Todas as técnicas, desde a avaliação até a finalização, todas serão postas em prática nesse evento seleto para PROFISSIONAIS.',
  finalConsider = 'No momento, o curso ja está com a lotação maxima',
  id = 'Course',
}: CourseProps) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
    console.log(show);
  };
  return (
    <Styled.Wrapper id={id}>
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
        <br />
        <br />
        {finalConsider}
        <Styled.KnowMore href="https://api.whatsapp.com/send?phone=5521971083900&text=Olá,%20gostaria%20de%20saber%20mais%sobre%20o%20curso">
          <KeyboardArrowRightIcon fontSize="inherit" />
          Saiba Mais
        </Styled.KnowMore>
      </Styled.CourseContent>
    </Styled.Wrapper>
  );
};
