import { useState, Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  {
    name: 'About',
    href: 'https://cerebralvalley.notion.site/Cerebral-Valley-a7361e7091204a3fbc8fcc8bc740277b',
  },
  { name: 'Events', href: 'https://cerebralvalley.ai/events' },
  { name: 'Co-Working', href: 'https://cerebralvalley.ai/build' },
  { name: 'Newsletter', href: 'https://cerebralvalley.beehiiv.com/' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Cerebral Valley</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <MainLinks />
      <NewInAI />
      <Footer />
    </>
  );
}

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/">
                    <span className="sr-only">Cerebral Valley</span>
                    <img
                      src="/cerebralvalley.png"
                      alt="logo"
                      className="h-10 rounded-md"
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">🤖 Cerebral Valley 🤖</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A community for people working, building, and exploring AI
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <EmailCapture />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const EmailCapture = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const res = await fetch('/api/submitEmail', {
      method: 'POST',
      body: JSON.stringify({ email: target.email.value }),
    });
    if (res.ok) {
      setIsSuccess(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="sm:flex">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs bg-gray-100 rounded-md"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Notify me
          </button>
        </div>
      </div>
      {isSuccess && (
        <div className="mt-4 text-green-500">Subscribed to newsletter!</div>
      )}
      {isError && (
        <div className="mt-4 text-red-500">
          Error subscribing to newsletter. Please try again.
        </div>
      )}
    </form>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022 Cerebral Valley, Inc.
        </p>
      </div>
    </footer>
  );
};

const mainLinks = [
  {
    name: 'AI Events List',
    description:
      'A curated list of AI events happening in the Bay Area and beyond',
    icon: '🌉',
    link: 'https://cerebralvalley.ai/events',
  },
  {
    name: 'AI Builders Co-Working',
    description:
      'Sign up for our co-working sessions to work on your AI projects alongside other AI builders',
    icon: '💻',
    link: 'https://cerebralvalley.ai/build',
  },
  {
    name: 'About us',
    description:
      'A quick introduction to Cerebral Valley and what we are trying to accomplish',
    icon: '👋',
    link: 'https://cerebralvalley.notion.site/Cerebral-Valley-a7361e7091204a3fbc8fcc8bc740277b',
  },
  {
    name: 'Newsletter',
    description:
      'Weekly newsletter with the latest news and events happening in Cerebral Valley',
    icon: '📰',
    link: 'https://cerebralvalley.beehiiv.com/',
  },
];

const MainLinks = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Getting Involved
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            All the resources to get involved in the community
          </p>
        </div>

        <div className="my-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                className="reslative border border-gray-200 rounded-lg p-8 flex flex-col justify-between hover:bg-gray-50"
                href={link.link}
                target="_blank"
                rel="noreferrer"
              >
                <dt>
                  <div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md"
                    style={{ fontSize: 40 }}
                  >
                    {link.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {link.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {link.description}
                </dd>
              </a>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

const newInAILinks = [
  {
    name: 'New in AI Newsletter',
    description: 'Weekly digest of the latest news from the AI space',
    icon: (
      <img
        src="/substack_logo.png"
        alt="logo"
        className="rounded-md pr-4"
        style={{ width: 70 }}
      />
    ),
    link: 'https://newinai.substack.com/',
  },
  {
    name: 'New In AI Twitter',
    description: 'Twitter bot tracking the latest news from the AI industry',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 248 204"
        width="64"
        height="auto"
        className="rounded-md pr-4"
      >
        <path
          fill="#1d9bf0"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
        />
      </svg>
    ),
    link: 'https://twitter.com/whatsnewinai',
  },
];

const NewInAI = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          {`What's new in AI?`}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
          Staying up to date with the latest news and events in the AI industry
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {newInAILinks.map((link) => (
            <a
              key={link.name}
              className="bg-white bg-opacity-10 rounded-md p-8 hover:bg-opacity-20"
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              <div>{link.icon}</div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">{link.name}</h3>
                <p className="mt-2 text-base text-indigo-200">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
