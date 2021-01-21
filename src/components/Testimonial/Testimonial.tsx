import * as React from 'react';
import { sample } from 'lodash';
import { Link } from '../Link';

export interface TestimonialProps {
  name: string;
  company?: string;
  url: string;
  text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  company = 'North X South',
  url,
  text,
}) => {
  const randomTag = sample(['headshot', 'cat']);

  return (
    <div className="flex flex-col justify-center p-8 bg-gray-100 rounded">
      <p className="flex-grow mb-6 leading-relaxed text-gray-800">{text}</p>
      <Link to={url} className="inline-flex items-center">
        <img
          alt="testimonial"
          src={`https://source.unsplash.com/random/50x50?${randomTag}`}
          className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
          loading="lazy"
        />
        <span className="flex flex-col flex-grow pl-4">
          <span className="font-medium text-gray-900">{name}</span>
          <span className="text-sm text-gray-500">{company}</span>
        </span>
      </Link>
    </div>
  );
};

export { Testimonial };
