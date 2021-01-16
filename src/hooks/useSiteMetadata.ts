import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
          language
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
