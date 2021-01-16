import * as React from 'react';
import { Helmet } from 'react-helmet';

interface TwitterProps {
  cardStyle?: string;
  username?: string;
  title: string;
  description: string;
  image: string;
}

const Twitter: React.FC<TwitterProps> = ({
  cardStyle = 'summary_large_image',
  username,
  title,
  description,
  image,
}) => {
  return (
    <Helmet>
      <meta name="twitter:card" content={cardStyle} />
      {username && <meta name="twitter:creator" content={username} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export { Twitter };
