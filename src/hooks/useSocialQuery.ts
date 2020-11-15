import { graphql, useStaticQuery } from 'gatsby';

export const useSocialQuery = (): GatsbyTypes.SocialQueryQuery['site']['siteMetadata']['social'] => {
  const data = useStaticQuery<GatsbyTypes.SocialQueryQuery>(graphql`
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
