import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import { HomepageQueryQuery } from '../../graphql-types';

interface IHomepageProps {
  location: Location;
  data: HomepageQueryQuery;
}

const HomePage: React.FC<IHomepageProps> = ({ location, data }) => (
  <Layout location={location}>
    <section className="text-gray-700 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            Hero Element Title
          </h1>
          <p className="mb-8 leading-relaxed">
            Chroma hue, dark rainbow color yellow. Gradient swatch hue grey,
            neon paint teal pastel orange. Aqua black gradient, bright persimmon
            concrete color. Gradient rainbow teal color, neon chroma pastel
            orange mint. Color light, orange purple teal.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-600"
              type="button"
            >
              Button
            </button>
            <button
              className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300"
              type="button"
            >
              Button
            </button>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Img
            fluid={data.headerImage.childImageSharp.fluid}
            alt="Abstract image by Gradienta on Unsplash"
            className="object-cover object-center w-full h-full rounded shadow"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        buildContext
        version
      }
    }
    siteBuildMetadata {
      buildTime
    }
    headerImage: file(
      relativePath: { eq: "placeholder-images/unsplash-gradienta.jpeg" }
    ) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default HomePage;
