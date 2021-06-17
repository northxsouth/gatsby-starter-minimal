import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

export const useSocialImageQuery = (): string => {
  const data = useStaticQuery<GatsbyTypes.SocialImageQueryQuery>(graphql`
    query SocialImageQuery {
      socialImage: file(relativePath: { eq: "social-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 630, quality: 100)
        }
      }
    }
  `);
  return getSrc(data.socialImage.childImageSharp.gatsbyImageData);
};
