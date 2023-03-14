import { Button } from 'components/Button';
import { useState, useRef, useEffect } from 'react';
import * as Styled from './styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Heading } from 'components/Heading';
import { Description } from 'components/Description';
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
  const courseRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show && courseRef.current) {
      courseRef.current.focus();
    }
  }, [show]);

  const handleClick = () => {
    setShow((show) => !show);
    return;
  };

  return (
    <Styled.Wrapper id={id}>
      <Button onClick={handleClick} id="course-button">
        Curso
        {show ? (
          <ArrowDropUpIcon fontSize="inherit" />
        ) : (
          <ArrowDropDownIcon fontSize="inherit" />
        )}
      </Button>
      <Styled.CourseContent show={show} ref={courseRef} tabIndex={0}>
        <Heading as="h4">{course}</Heading>
        <Description father="curso-pratico" fontSize="14px">
          {description}
          <br />
          <br />
          {finalConsider}
        </Description>
        <Styled.KnowMore href="https://api.whatsapp.com/send?phone=5521971083900&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20curso">
          <KeyboardArrowRightIcon fontSize="inherit" />
          Saiba Mais
        </Styled.KnowMore>
      </Styled.CourseContent>
    </Styled.Wrapper>
  );
};
