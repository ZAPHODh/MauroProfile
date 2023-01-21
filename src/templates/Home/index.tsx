import { Carousel } from 'components/Carousel';
import { CarouselItem } from 'components/CarouselItem';
import { MapContent } from 'components/MapContent';
import { Profile } from 'components/Profile';
import * as Styled from './styles';
import { carouselData } from '../../config/carouselData';
import { Schedule } from 'components/Schedule';
function Home() {
  return (
    <Styled.Wrapper>
      <Profile />
      <Carousel>
        {carouselData.map((data) => (
          <CarouselItem
            endDate={data.endDate}
            endDateToCalc={data.endDateToCalc}
            endMessage={data.endMessage}
            img={data.img}
            subtitle={data.subtitle}
            title={data.title}
            key={Math.random()}
          />
        ))}
      </Carousel>
      <Schedule />
      <MapContent />
    </Styled.Wrapper>
  );
}

export default Home;
