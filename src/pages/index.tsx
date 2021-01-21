import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import { Layout } from '../components/Layout';
import { Link } from '../components/Link';
import { Testimonial } from '../components/Testimonial';
import { Container, FullWidthContainer } from '../components/Container';

const HomePage: React.FC<PageProps<GatsbyTypes.HomepageQuery>> = ({ data }) => (
  <Layout>
    <section id="hero" className="text-gray-700">
      <div className="container flex flex-col items-center px-4 py-6 mx-auto sm:py-12 md:py-24 md:flex-row">
        <div className="flex flex-col items-center mb-12 text-center md:mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 font-medium leading-tight text-gray-900 lg:text-6xl sm:text-4xl">
            {data.site.siteMetadata.titleShort}
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
            image={data.headerImage.childImageSharp.gatsbyImageData}
            alt="Abstract image by Gradienta on Unsplash"
            className="object-cover object-center w-full h-full rounded shadow"
          />
        </div>
      </div>
    </section>

    <section id="testimonials">
      <Container className="py-24">
        <div className="grid justify-between grid-cols-1 gap-6 lg:grid-cols-2">
          <Testimonial
            name="Rainbow Mint"
            url="https://northxsouth.co"
            text="Chroma burgundy yellow vivid, hue white violet, color silver grey light gradient tomato. Green chocolate yellow mint, gradient hue tomato neon concrete. Violet chroma, neon mint pastel. Saturation tomato red, aqua pink orange."
          />
          <Testimonial
            name="Purple Gradient"
            url="https://northxsouth.co"
            text="Persimmon dark brown, silver purple. Rainbow purple mint, pink pastel black. Aqua rose vivid chocolate, light beige purple, violet green orange gradient."
          />
        </div>
      </Container>
    </section>

    <section id="cta">
      <Container className="py-24">
        <div className="flex flex-col items-start mx-auto lg:w-2/3 sm:flex-row sm:items-center">
          <h1 className="flex-grow text-2xl font-medium text-gray-900 sm:pr-16">
            Brown indigo dark, peach chocolate vermillion red-violet, ivory
            blue-violet bright.
          </h1>
          <Link
            to="/contact/"
            className="flex-shrink-0 px-8 py-2 mt-10 text-2xl font-medium text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-600 sm:mt-0"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </section>
  </Layout>
);

export const query = graphql`
  query Homepage {
    site {
      siteMetadata {
        title
        titleShort
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
        gatsbyImageData(layout: FULL_WIDTH, quality: 70, placeholder: BLURRED)
      }
    }
  }
`;

export default HomePage;
