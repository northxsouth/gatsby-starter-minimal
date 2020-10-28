import { graphql, useStaticQuery } from 'gatsby';
import { SocialImageQueryQuery } from '../../graphql-types';

export const useSocialImageQuery = (): string => {
  const data: SocialImageQueryQuery = useStaticQuery(graphql`
    query SocialImageQuery {
      socialImage: file(relativePath: { eq: "social-image.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 630) {
            src
          }
        }
      }
    }
  `);
  return data.socialImage.childImageSharp.fluid.src;
};
