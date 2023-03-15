import { Carousel } from 'components/Carousel';
import { CarouselItem } from 'components/CarouselItem';
import { MapContent } from 'components/MapContent';
import { Profile } from 'components/Profile';
import * as Styled from './styles';
import { Schedule } from 'components/Schedule';
import { Course } from 'components/Course';
import React, { useEffect, useState } from 'react';
import { IndexTypeProps } from 'pages';
import Head from 'next/head';
import { OffersTable } from 'components/OffersTable';

function Home({ course, profile, sliders, schedulers, offer }: IndexTypeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (isLoaded) {
    return (
      <>
        <Head>
          <title>Cabeleireiro Mauro Chrisostimo</title>
        </Head>
        <Styled.Wrapper>
          <Profile imgWidth={profile.imgWidth} profile={profile.profileData} />
          <Carousel interval={10000}>
            {sliders &&
              sliders.map((data) => (
                <CarouselItem
                  description={data.attributes.description}
                  bottomMessage={data.attributes.bottomMessage}
                  endDateToCalc={data.attributes.endDateToCalc}
                  endMessage={data.attributes.endMessage}
                  img={data.attributes.img.data.attributes.url}
                  subtitle={data.attributes.subtitle}
                  title={data.attributes.title}
                  key={Math.random()}
                />
              ))}
          </Carousel>
          <OffersTable Offers={offer}></OffersTable>
          <Schedule schedulers={schedulers} />
          <Course
            course={course.course}
            description={course.description}
            finalConsider={course.finalConsider}
          />
          <MapContent />
        </Styled.Wrapper>
      </>
    );
  }
  return <p>loading...</p>;
}

export default Home;
