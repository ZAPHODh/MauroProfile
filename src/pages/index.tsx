import Home from 'templates/Home';
import request from 'graphql-request';
import { GET_COURSE, GET_PROFILE, GET_SLIDERS } from '../graphql/querys';
import {
  CourseGraphType,
  ProfileGraphType,
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
  imgWidth: string;
};

export type IndexTypeProps = {
  sliders: SliderType[];
  course: courseProp;
  profile: profileProp;
};

export default function Index({ sliders, course, profile }: IndexTypeProps) {
  console.log(course);
  return <Home sliders={sliders} course={course} profile={profile} />;
}

export const getStaticProps = async () => {
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
  const imgWidth = profileRaw.perfil.data.attributes.imgWidth;
  const profileData =
    profileRaw.perfil.data.attributes.profile.data.attributes.url;
  const profile = { profileData, imgWidth };
  const sliders = slidersRaw.sliders.data;
  const course = courseRaw.curso.data.attributes;
  return {
    props: { sliders, course, profile },
  };
};
