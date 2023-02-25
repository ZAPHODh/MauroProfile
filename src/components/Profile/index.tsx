import { Heading } from 'components/Heading';
import { SocialMedia } from 'components/SocialMedia';
import * as Styled from './styles';
import Image from 'next/image';
import { Description } from 'components/Description';

export type ProfileProps = {
  profile?: string;
  alt?: string;
  imgWidth?: number;
  id?: string;
};

export const Profile = ({
  profile,
  alt = 'Profile pic',
  imgWidth = 250,
  id = 'profile',
}: ProfileProps) => {
  return (
    <Styled.Wrapper id={id}>
      <Styled.ProfilePic imgWidth={imgWidth}>
        <Image
          alt={alt}
          src={profile}
          width={imgWidth}
          height={imgWidth}
          loading="lazy"
        ></Image>
      </Styled.ProfilePic>
      <Heading>Mauro Chrisostimo</Heading>
      <Heading as="h2">Cabeleireiro</Heading>
      <Description father="social-media">Mídias sociais</Description>
      <SocialMedia />
    </Styled.Wrapper>
  );
};
