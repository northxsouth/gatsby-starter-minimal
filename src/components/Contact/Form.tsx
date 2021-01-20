import * as React from 'react';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <form className="grid grid-cols-1 gap-4" method="get" action="/thanks/">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="px-4 py-2 text-base bg-white border border-gray-400 rounded w-100 focus:outline-none focus:border-primary-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="sr-only">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="px-4 py-2 text-base bg-white border border-gray-400 rounded w-100 focus:outline-none focus:border-primary-500"
          />
        </div>
      </div>

      <div className="flex flex-col mt-1">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="px-4 py-2 text-base bg-white border border-gray-400 rounded w-100 focus:outline-none focus:border-primary-500"
          required
        />
      </div>

      <div className="flex flex-col mt-1">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Your Message Here"
          className="px-4 py-2 text-base bg-white border border-gray-400 rounded resize-none w-100 focus:outline-none focus:border-primary-500"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-base font-medium text-white uppercase border rounded border-primary-500 w-100 bg-primary focus:outline-none focus:bg-primary-600 hover:bg-primary-600"
      >
        Send Message
      </button>
    </form>
  );
};

export { ContactForm };
