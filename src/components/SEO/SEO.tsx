import * as React from 'react';
import Helmet from 'react-helmet';
import url from 'url';
import { useSiteMetadata, useSocialImageQuery } from '../../hooks';

interface ISEOProps {
  title?: string;
  description?: string;
  image?: string;
  pathName?: string;
}

const SEO: React.FC<ISEOProps> = ({ title, description, image, pathName }) => {
  const {
    siteUrl,
    social,
    title: defaultTitle,
    description: defaultDescription,
  } = useSiteMetadata();
  const socialImageSrc = useSocialImageQuery();
  const ogType = 'website';
  const parsedUrl = url.parse(`${siteUrl}${pathName}`);

  const twitterCardStyle = 'summary_large_image';

  const socialImage = socialImageSrc || image;

  const pageUrl = `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`;
  const socialImageUrl = socialImage
    ? url.parse(`${siteUrl}${socialImage}`).href
    : null;

  return (
    <Helmet
      defaultTitle={title || defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
      title={title}
    >
      {/* General tags */}
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={socialImageUrl} />

      <link rel="canonical" href={pageUrl} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={socialImageUrl} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCardStyle} />
      <meta name="twitter:creator" content={social.twitter.username} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={socialImageUrl} />
    </Helmet>
  );
};

export { SEO };
