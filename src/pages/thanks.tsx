import { PageProps } from 'gatsby';
import * as React from 'react';
import { Container, SlimContainer } from '../components/Container';
import { Layout } from '../components/Layout';
import { Link } from '../components/Link';

const ThanksPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Thanks!">
      <header>
        <SlimContainer className="py-12">
          <h1 className="text-4xl font-semibold leading-8 text-center text-gray-900 md:text-6xl">
            We received your message, hold tight!
          </h1>
        </SlimContainer>
      </header>
      <section>
        <SlimContainer className="py-12 text-lg text-center">
          <p>
            We will be in touch shortly. Peach spring green silver, bronze
            persimmon, beige dark saturated yellow-green white taupe cerulean.
            Yellow-green iris red, eggplant chocolate, metallic blue-violet rose
            taupe color fuchsia. Tan beige sand cream.
          </p>
        </SlimContainer>
      </section>
      <section>
        <Container className="py-12">
          <div className="grid gap-4 lg:grid-cols-3 grid-1">
            <div className="col-span-full">
              <h3 className="pb-6 text-4xl font-semibold text-center text-gray-900 md:text-3xl">
                In the meantime check these out
              </h3>
            </div>
            <div className="flex flex-col px-8 py-6 border-gray-200 md:border-l-2 border-opacity-60">
              <h3 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl ">
                Red-violet violet
              </h3>
              <p className="flex-grow mb-4 text-base leading-relaxed">
                Saffron pale eggplant chroma, dark celadon tomato, ivory grey
                red-orange black periwinkle orange. Teal olive red-violet
                lavender, dark eggplant ochre viridian iris. Spring green white
                ivory vermillion, teal gamboge yellow-green, color mustard sand
                yellow-orange silver yellow.
              </p>
              <Link
                to="/"
                className="inline-flex items-center text-primary-500"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col px-8 py-6 border-gray-200 md:border-l-2 border-opacity-60">
              <h3 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl ">
                Mulberry yellow
              </h3>
              <p className="flex-grow mb-4 text-base leading-relaxed">
                Ochre orchid, light gradient olive salmon. Mustard dark moss
                off-white, black hue concrete, scarlet brown cream tomato ochre
                green sepia apricot.
              </p>
              <Link
                to="/"
                className="inline-flex items-center text-primary-500"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col px-8 py-6 border-gray-200 md:border-l-2 border-opacity-60">
              <h3 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl ">
                Blue-green cerulean
              </h3>
              <p className="flex-grow mb-4 text-base leading-relaxed">
                Yellow purple chroma, yellow-orange teal, raspberry orange ochre
                vermillion sepia sea green. Dark red blue-green cerulean,
                mulberry mustard celadon.
              </p>
              <Link
                to="/"
                className="inline-flex items-center text-primary-500"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ThanksPage;
