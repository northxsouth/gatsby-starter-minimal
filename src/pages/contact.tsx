import { PageProps } from 'gatsby';
import * as React from 'react';
import { ContactForm } from '../components/Contact';
import { SlimContainer } from '../components/Container';
import { Layout } from '../components/Layout';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Contact Us">
      <header className="my-12 mb-16">
        <div className="container mx-auto">
          <h1 className="font-semibold text-center text-gray-900 md:text-6xl sm:text-4xl">
            Get In Touch
          </h1>
        </div>
      </header>
      <section className="mb-4 text-gray-700 body-font">
        <SlimContainer>
          <div className="flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mt-4 text-lg font-medium text-gray-900">
                  Company Name
                </h2>
                <div className="w-12 h-1 mt-2 mb-4 rounded bg-primary-500" />
                <p className="text-base text-gray-600">
                  Grey yellow lime, light rainbow, navy blue red magenta mint
                  blue plum.
                </p>
                <p className="mt-2 text-base font-medium text-gray-600">
                  Visit Us
                </p>
                <address>612 S Wabash Ave, Chicago, IL 60605</address>
              </div>
            </div>
            <div className="pt-4 mt-4 text-center border-t border-gray-300 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
              <ContactForm />
            </div>
          </div>
        </SlimContainer>
      </section>

      <section className="relative text-gray-700 body-font">
        <div className="bg-gray-300 h-80">
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
      </section>
    </Layout>
  );
};

export default ContactPage;
