// import { Carousel } from 'components/Carousel';
// import { CarouselItem } from 'components/CarouselItem';
import { MapContent } from 'components/MapContent';
import { Profile } from 'components/Profile';
import * as Styled from './styles';
function Home() {
  return (
    <Styled.Wrapper>
      <Profile />
      <MapContent />
    </Styled.Wrapper>
  );
}

export default Home;
