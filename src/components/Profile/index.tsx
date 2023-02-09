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
  profile = 'https://pps.whatsapp.net/v/t61.24694-24/322299027_153400430846867_3312810277051212599_n.jpg?ccb=11-4&oh=01_AdSwbwzADaX0H27QQRBL6bHXpR5hDXMbnXl421IDAhpcqQ&oe=63D6B753',
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
        ></Image>
      </Styled.ProfilePic>
      <Heading>Mauro Chrisostimo</Heading>
      <Heading as="h2">Cabeleireiro</Heading>
      <Description father="social-media">Mídias sociais</Description>
      <SocialMedia />
    </Styled.Wrapper>
  );
};
