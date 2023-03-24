import * as Styled from './styles';
import { useCallback, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Tooltip } from '@mui/material';

export type CarouselProps = {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  id?: string;
};

export const Carousel = ({
  children,
  autoPlay = true,
  interval = 3000,
  id = 'Carousel',
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(autoPlay);
  const slideCount = children.length;

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide + slideCount - 1) % slideCount);
  };

  const handleNextClick = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % slideCount);
  }, [currentSlide, slideCount]);
  useEffect(() => {
    if (shouldAutoPlay) {
      const intervalId = setInterval(handleNextClick, interval);
      return () => clearInterval(intervalId);
    }
  }, [handleNextClick, shouldAutoPlay, interval]);
  const swipeableHandler = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });
  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };
  const handleMouseIn = () => {
    setShouldAutoPlay(false);
  };
  const handleMouseOut = () => {
    setShouldAutoPlay(true);
  };
  return (
    <Styled.CarouselContainer
      id={id}
      {...swipeableHandler}
      onFocus={() => {
        handleMouseIn();
      }}
      onMouseEnter={() => {
        handleMouseIn();
      }}
      onMouseLeave={() => {
        handleMouseOut();
      }}
    >
      <Styled.Wrapper>
        <Styled.ProductContainer>
          {children[currentSlide]}
        </Styled.ProductContainer>
      </Styled.Wrapper>
      <Styled.ManageContainer>
        <Tooltip title="Promoção anterior">
          <Styled.ArrowBTN onClick={handlePrevClick}>
            <KeyboardArrowLeftIcon fontSize="inherit" />
          </Styled.ArrowBTN>
        </Tooltip>
        <Styled.IndicatorContainer>
          {children.map((child, index) => (
            <Styled.Indicator
              key={index}
              active={index === currentSlide}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </Styled.IndicatorContainer>
        <Tooltip title="Próxima promoção">
          <Styled.ArrowBTN onClick={handleNextClick}>
            <KeyboardArrowRightIcon fontSize="inherit" />
          </Styled.ArrowBTN>
        </Tooltip>
      </Styled.ManageContainer>
    </Styled.CarouselContainer>
  );
};
