import Home from 'templates/Home';
import request from 'graphql-request';
import { useEffect, useState } from 'react';
import {
  GET_COURSE,
  GET_PROFILE,
  GET_SCHEDULER,
  GET_SLIDERS,
} from '../graphql/querys';
import {
  CourseGraphType,
  ProfileGraphType,
  SchedulersType,
  SchedulerType,
  SlidersGraphType,
  SliderType,
} from 'graphql/types';

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
};

export default function Index({
  sliders,
  course,
  profile,
  schedulers,
}: IndexTypeProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return (
    <>
      {isClient && (
        <Home
          sliders={sliders}
          course={course}
          profile={profile}
          schedulers={schedulers}
        />
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const schedulersRaw: SchedulersType = await request(
    'https://mcserver-strapi.herokuapp.com/graphql',
    GET_SCHEDULER,
  );
  const slidersRaw: SlidersGraphType = await request(
    'https://mcserver-strapi.herokuapp.com/graphql',
    GET_SLIDERS,
  );
  const courseRaw: CourseGraphType = await request(
    'https://mcserver-strapi.herokuapp.com/graphql',
    GET_COURSE,
  );
  const profileRaw: ProfileGraphType = await request(
    'https://mcserver-strapi.herokuapp.com/graphql',
    GET_PROFILE,
  );
  //map data
  const imgWidth = Number(profileRaw.perfil.data.attributes.imgWidth);
  const profileData =
    profileRaw.perfil.data.attributes.profile.data.attributes.url;
  const profile = { profileData, imgWidth };
  const sliders = slidersRaw.sliders.data;
  const course = courseRaw.curso.data.attributes;
  const schedulers = schedulersRaw.schedulers.data;
  return {
    props: { sliders, course, profile, schedulers },
  };
};
