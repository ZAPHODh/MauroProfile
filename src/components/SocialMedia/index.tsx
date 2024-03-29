import * as Styled from './styles';

import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import useScreenWidth from 'customHooks/useScreenWidth';
import { Tooltip } from '@mui/material';
export type SocialMediaType = {
  socialMedia?: 'LinkedIn' | 'Facebook' | 'Instagram' | 'Youtube' | 'Twitter';
  webLink?: string;
  appLink?: string;
};

export type SocialMediaProps = {
  socialMedia?: SocialMediaType[];
  id?: string;
};

export const SocialMedia = ({
  socialMedia = [
    {
      socialMedia: 'Instagram',
      appLink: 'instagram://instagram.com/maurochrisostim0?igshid=YmMyMTA2M2Y=',
      webLink: 'https://instagram.com/maurochrisostim0?igshid=YmMyMTA2M2Y=',
    },
    {
      socialMedia: 'Facebook',
      appLink:
        'facebook://www.facebook.com/mauro.chrisostimo.7?mibextid=ZbWKwL',
      webLink: 'https://www.facebook.com/mauro.chrisostimo.7?mibextid=ZbWKwL',
    },
  ],
  id = 'socialMedia',
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
  const width = useScreenWidth();

  return (
    <Styled.Wrapper id={id}>
      {socialMedia.map((media) => {
        return (
          <Tooltip
            title={`Abrir ${media.socialMedia}`}
            key={media.socialMedia}
            arrow
          >
            <Styled.Link
              href={width <= 728 ? media.appLink : media.webLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir ${media.socialMedia}`}
            >
              <FindMedia socialMedia={media.socialMedia} />
            </Styled.Link>
          </Tooltip>
        );
      })}
    </Styled.Wrapper>
  );
};
