import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useSiteMetadata, useSocialImageQuery } from '../../hooks';
import { Twitter } from './Twitter';

interface SEOProps {
  /** Title of your page */
  title?: string;
  /** Used for SEO meta description and social cards */
  description?: string;
  /** Relative path to social image */
  image?: string;
  language?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  language = 'en',
}) => {
  const {
    siteUrl,
    social,
    title: defaultTitle,
    description: defaultDescription,
    language: defaultLanguage,
  } = useSiteMetadata();
  const socialImageSrc = useSocialImageQuery();
  const location = useLocation();

  const ogType = 'website';
  const pageUrl = new URL(location.pathname, siteUrl).toString();

  const opts = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    lang: language || defaultLanguage,
    socialImage: socialImageSrc || image,
  };

  const socialImageUrl = opts.socialImage
    ? new URL(opts.socialImage, siteUrl).toString()
    : null;

  return (
    <>
      <Helmet
        defaultTitle={opts.title}
        titleTemplate={`%s | ${defaultTitle}`}
        title={title}
      >
        <html lang={opts.lang} />
        {/* General tags */}
        <meta name="description" content={opts.description} />
        <meta name="image" content={socialImageUrl} />
        <link rel="canonical" href={pageUrl} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={opts.title} />
        <meta property="og:description" content={opts.description} />
        <meta property="og:image" content={socialImageUrl} />
      </Helmet>
      <Twitter
        title={opts.title}
        description={opts.description}
        image={socialImageUrl}
        username={social.twitter?.username}
      />
    </>
  );
};

export { SEO };
