import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadataQuery } from '../../graphql-types';

export const useSiteMetadata = (): SiteMetadataQuery['site']['siteMetadata'] => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
          social {
            twitter {
              username
            }
          }
        }
      }
    }
  `);
  return site.siteMetadata;
};
