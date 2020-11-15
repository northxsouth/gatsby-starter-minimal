import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = (): GatsbyTypes.SiteMetadataQuery['site']['siteMetadata'] => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(graphql`
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
