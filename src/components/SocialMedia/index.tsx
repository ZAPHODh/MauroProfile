import * as Styled from './styles';

import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export type SocialMediaType = {
  socialMedia?: 'LinkedIn' | 'Facebook' | 'Instagram' | 'Youtube' | 'Twitter';
  link?: string;
};

export type SocialMediaProps = {
  socialMedia?: SocialMediaType[];
};

export const SocialMedia = ({
  socialMedia = [
    {
      socialMedia: 'Instagram',
      link: 'instagram://instagram.com/maurochrisostimo_?igshid=Yzg5MTU1MDY=',
    },
    {
      socialMedia: 'Facebook',
      link: 'facebook://www.facebook.com/mauro.chrisostimo.7?mibextid=ZbWKwL',
    },
  ],
}: SocialMediaProps) => {
  const FindMedia = (media: SocialMediaType): JSX.Element => {
    if (media.socialMedia === 'Facebook')
      return <FacebookIcon fontSize="inherit" />;
    if (media.socialMedia === 'Youtube')
      return <YouTubeIcon fontSize="inherit" />;
    if (media.socialMedia === 'Instagram')
      return <InstagramIcon fontSize="inherit" />;
    if (media.socialMedia === 'Twitter')
      return <TwitterIcon fontSize="inherit" />;
    if (media.socialMedia === 'LinkedIn')
      return <LinkedInIcon fontSize="inherit" />;
    return <></>;
  };
  // const openSocialMediaApp = async (link: string) => {
  //   if (navigator.canShare && navigator.canShare({ text: link })) {
  //     await navigator.share({ text: link });
  //   } else {
  //     window.open(link, '_blank');
  //   }
  // };
  return (
    <Styled.Wrapper>
      {socialMedia.map((media) => {
        return (
          <Styled.Link
            href={media.link}
            target="_blank"
            rel="noreferrer"
            key={media.socialMedia}
            // onClick={() => openSocialMediaApp(media.link)}
          >
            <FindMedia socialMedia={media.socialMedia} />
          </Styled.Link>
        );
      })}
    </Styled.Wrapper>
  );
};
