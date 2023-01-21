import { CarouselItemProps } from 'components/CarouselItem';
import courseImage from '../../public/assets/images/curso.jpg';
import mechasPromoImage from '../../public/assets/images/unnamed.jpg';
export const carouselData: CarouselItemProps[] = [
  {
    title: 'CURSO PRÁTICO',
    subtitle: 'by Mauro Chrisostimo',
    img: courseImage,
    endDate: '06 Fev',
    endDateToCalc: '06-02-2023',
    endMessage: 'Começa em...',
  },
  {
    title: 'MECHAS MORENA ILUMINADA',
    subtitle: 'Chocolate / Avelã / Café',
    img: mechasPromoImage,
    endDate: 'R$ 449,00',
    endDateToCalc: '31-01-2023',
    endMessage: 'Válido por...',
  },
];
