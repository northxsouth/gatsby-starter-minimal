import { graphql, useStaticQuery } from 'gatsby';
import { SocialQueryQuery } from '../../graphql-types';

export const useSocialQuery = (): SocialQueryQuery['site']['siteMetadata']['social'] => {
  const data: SocialQueryQuery = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            twitter {
              username
            }
            facebook {
              username
            }
            instagram {
              username
            }
          }
        }
      }
    }
  `);
  return data.site.siteMetadata.social;
};
