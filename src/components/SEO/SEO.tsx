import * as React from 'react';
import Helmet from 'react-helmet';
import url from 'url';
import { useSiteMetadata } from '../../hooks';

interface ISEOProps {
  title?: string;
  description?: string;
  image?: any;
  pathName?: string;
}

const SEO: React.FC<ISEOProps> = ({ title, description, image, pathName }) => {
  const {
    siteUrl,
    social,
    title: defaultTitle,
    description: defaultDescription,
  } = useSiteMetadata();
  const ogType = 'website';
  const parsedUrl = url.parse(`${siteUrl}${pathName}`);

  const pageUrl = `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`;
  return (
    <Helmet
      defaultTitle={title || defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
      title={title}
    >
      {/* General tags */}
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={image} />

      <link rel="canonical" href={pageUrl} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={social.twitter.username} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export { SEO };
