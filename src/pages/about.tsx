import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import { Layout } from '../components/Layout';
import { ContactForm } from '../components/Contact';
import { Container, SlimContainer } from '../components/Container';

const AboutPage: React.FC<PageProps<GatsbyTypes.AboutPageQuery>> = ({
  data,
}) => (
  <Layout title="About">
    <section className="text-gray-700 body-font">
      <SlimContainer className="flex flex-col px-4 py-12 mx-auto md:py-24">
        <div className="h-64 overflow-hidden rounded-lg shadow">
          <Img
            image={data.headerImage.childImageSharp.gatsbyImageData}
            alt="Abstract image by Gradienta on Unsplash"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col mt-10 sm:flex-row">
          <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 text-gray-400 bg-gray-200 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mt-4 text-lg font-medium text-gray-900">
                Company Name
              </h2>
              <div className="w-12 h-1 mt-2 mb-4 rounded bg-primary-500" />
              <p className="text-base text-gray-600">
                Grey yellow lime, light rainbow, navy blue red magenta mint blue
                plum.
              </p>
            </div>
          </div>
          <div className="pt-4 mt-4 text-center border-t border-gray-300 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
            <p className="mb-0 text-lg leading-relaxed">
              Rainbow cyan fuchsia, silver navy blue plum dark aqua. Purple
              white orange swatch, olive gray blue, neon crimson silver charcoal
              hot pink grey mint saturation. Plum hue purple coral, yellow
              rainbow pastel, black grey teal saturation orange lime light
              fuchsia. Rainbow teal, dark hue bright aquamarine. Light teal
              persimmon, magenta rainbow, navy blue olive red saturation
              fuchsia. Orange olive red, magenta wheat, purple khaki aquamarine
              teal persimmon hot pink charcoal.
            </p>
          </div>
        </div>
      </SlimContainer>
    </section>

    <section className="relative text-gray-700 body-font">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Chicago&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        />
      </div>
      <Container className="flex px-4 py-24">
        <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
          <h2 className="mb-1 text-2xl font-medium text-gray-900">Feedback</h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            White aquamarine pastel, saturation black, crimson grey red color
            persimmon navy blue paint; chroma grey gradient.
          </p>
          <ContactForm />
          <p className="mt-3 text-xs text-gray-500">
            Grey yellow lime, rainbow light, navy blue red magenta mint blue.
            Hot pink mint charcoal violet, chroma coral.
          </p>
        </div>
      </Container>
    </section>
  </Layout>
);

export const query = graphql`
  query AboutPage {
    headerImage: file(
      relativePath: { eq: "placeholder-images/unsplash-seanwsinclair.jpeg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 70, placeholder: BLURRED)
      }
    }
  }
`;

export default AboutPage;
