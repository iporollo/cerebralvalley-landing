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
    link: 'https://cerebralvalley.ai/events',
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

export default MainLinks;
