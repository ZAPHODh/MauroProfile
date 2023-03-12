import Home from 'templates/Home';
import request from 'graphql-request';
import {
  GET_COURSE,
  GET_OFFER,
  GET_PROFILE,
  GET_SCHEDULER,
  GET_SLIDERS,
} from '../graphql/querys';
import {
  CourseGraphType,
  OffersType,
  ProfileGraphType,
  SchedulersType,
  SchedulerType,
  SlidersGraphType,
  SliderType,
} from 'graphql/types';
import { GetStaticProps } from 'next';
export type offerMaped = {
  firstArgument: string;
  secondArgument: string;
  thirdArgument: string;
};

export type courseProp = {
  course: string;
  description: string;
  finalConsider: string;
};

export type profileProp = {
  profileData: string;
  imgWidth: number;
};

export type IndexTypeProps = {
  sliders: SliderType[];
  course: courseProp;
  profile: profileProp;
  schedulers: SchedulerType[];
  offer: offerMaped[];
};

export default function Index({
  sliders,
  course,
  profile,
  schedulers,
  offer,
}: IndexTypeProps) {
  return (
    <>
      <Home
        offer={offer}
        sliders={sliders}
        course={course}
        profile={profile}
        schedulers={schedulers}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const offersRaw: OffersType = await request(
    process.env.NEXT_PUBLIC_GRAPHQL,
    GET_OFFER,
  );
  const schedulersRaw: SchedulersType = await request(
    process.env.NEXT_PUBLIC_GRAPHQL,
    GET_SCHEDULER,
  );
  const slidersRaw: SlidersGraphType = await request(
    process.env.NEXT_PUBLIC_GRAPHQL,
    GET_SLIDERS,
  );
  const courseRaw: CourseGraphType = await request(
    process.env.NEXT_PUBLIC_GRAPHQL,
    GET_COURSE,
  );
  const profileRaw: ProfileGraphType = await request(
    process.env.NEXT_PUBLIC_GRAPHQL,
    GET_PROFILE,
  );
  //map data
  const mapedOffer = offersRaw.offers.data;
  const offer = mapedOffer.map((offer) => offer.attributes);
  const imgWidth = Number(profileRaw.perfil.data.attributes.imgWidth);
  const profileData =
    profileRaw.perfil.data.attributes.profile.data.attributes.url;

  const profile = { profileData, imgWidth };
  const sliders = slidersRaw.sliders.data;
  const course = courseRaw.curso.data.attributes;
  const schedulers = schedulersRaw.schedulers.data;
  return {
    props: { sliders, course, profile, schedulers, offer },
    revalidate: 10 * 60,
  };
};
