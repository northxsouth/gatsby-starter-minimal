import { graphql, useStaticQuery } from 'gatsby';

export const useSocialImageQuery = (): string => {
  const data = useStaticQuery<GatsbyTypes.SocialImageQueryQuery>(graphql`
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
