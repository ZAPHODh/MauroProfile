import { Carousel } from 'components/Carousel';
import { CarouselItem } from 'components/CarouselItem';
import { MapContent } from 'components/MapContent';
import { Profile } from 'components/Profile';
import * as Styled from './styles';
import { carouselData } from '../../config/carouselData';
function Home() {
  return (
    <Styled.Wrapper>
      <Profile />

      <Carousel>
        {carouselData.map((data) => (
          <CarouselItem
            bgColor={data.bgColor}
            offer={data.offer}
            key={data.offer}
          />
        ))}
      </Carousel>
      {/* <Styled.Divisor /> */}
      <MapContent />
    </Styled.Wrapper>
  );
}

export default Home;
